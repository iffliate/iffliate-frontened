import axios from 'axios'
import { useEffect, useState } from 'react'
import Button from '../Button/Button'
import InputWithLabel from '../InputWithLabel/InputWithLabel'
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import useToast from '../../hooks/useToastify';
import Preloader from '../Preloader/Preloder';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { requestForPayment, requestForPaymentProp } from '../../redux/Wallet/WalletApi';
import { clean_stateWallet, selectWallet } from '../../redux/Wallet/WalletSlice';



const schema = yup.object({
  'bank_name':yup.string().required(),
  'account_number':yup.string().required(),
  'amount':yup.number().required(),
  'shop_id':yup.number().required(),
})

const RequestWithdraw= () =>{
  const route = useRouter();
  const { shop } = route.query
  const dispatch = useAppDispatch();
  const {notify}= useToast()
  const [banks,setBanks] = useState<any>();
  const [isLoading,setIsLoading]= useState(false)
  const {list_of_wallet_transactionStatus,errMessage,message} = useAppSelector(selectWallet)

  const { register,setValue, handleSubmit, formState: { errors } } = useForm<requestForPaymentProp>({
    resolver: yupResolver(schema)
  });


  const getBanks = async()=>{
    setIsLoading(true)
    const resp:any =await axios.get('https://api.paystack.co/bank');
    setIsLoading(false)
    setBanks(resp.data.data.map((data:any)=>data.name))
  }

  const onSubmit = (data: requestForPaymentProp) => {
    console.log('subbmited',data)
    dispatch(requestForPayment(data))
  }
  useEffect(()=>{
    if(!banks){
      getBanks()
    }
  },[])
  useEffect(()=>{
    if(typeof shop =='string'){
      setValue('shop_id',parseInt(shop))
    }
  },[route.isReady])
  // useEffect(()=>{
  //   if(errMessage){
  //     notify(errMessage,'error')
  //     dispatch(clean_stateWallet({}))
  //   }
  //   if(message){
  //     notify(message,'success')
  //     dispatch(clean_stateWallet({}))

  //   }
  // },[message,errMessage])
  console.log({errors})
  return (
    <form  onSubmit={handleSubmit(onSubmit)}>
      <Preloader loading={isLoading}/>
      <h3 style={{'color':'#4b5563'}}>Withdraw Balance</h3>
      <br />
      <p><label htmlFor="">Please select Bank</label></p>
      <select
        {...register('bank_name')}
      >
        {
          banks?
            banks.map((d:string,index:number)=> <option
              onChange={(e:any)=>{
                setValue('bank_name',e.target.value)
              }}
              key={index} value={d}>{d}</option>)
            :''
        }
      </select>
      <small style={{'color':'crimson'}}>{errors.bank_name?.message}</small>
      <br />
      <br />
      <InputWithLabel
        label="Account Number"
        register={register('account_number')}
        errorMessage={errors.account_number?.message}
      />
      <br />
      <InputWithLabel
        label="Amount"
        register={register('amount')}
        errorMessage={errors.amount?.message}
      />
      <br />
      <Button>
        Submit
      </Button>
    </form>
  )
}

export default RequestWithdraw