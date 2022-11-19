import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import DashboardLayout from '../../../../layout/DashboardLayout/DashboardLayout';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { deleteProductApi, getProductApi } from '../../../../redux/Product/ProductApi';
import { selectProduct } from '../../../../redux/Product/ProductSlice';
import Button from '../../../../shared/Button/Button';
import Pane from '../../../../shared/Pane/Pane';
import Table from '../../../../shared/Table/Table';
import {AiFillCloseCircle} from 'react-icons/ai'
import {BsFillCalendar2CheckFill} from 'react-icons/bs'
import useToast from '../../../../hooks/useToastify';

export type prop_columnsType ={Header:string,accessor?:string,Cell?:any,id?:any}



const ShopDetail:NextPage =()=>{
  const route = useRouter();
  const {notify} = useToast()
  const { shop } = route.query
  const dispatch = useAppDispatch();
  const { data,status} = useAppSelector(selectProduct)
  const isLaptop = useMediaQuery({ query: '(min-width: 700px)' });

  const handleDelete = (slug:string)=>{
    console.log('Yooo')
    if (window.confirm('Do you really wanna delete it')){
      dispatch(deleteProductApi({slug}))

    }
  }
  const prop_columns:prop_columnsType[] = [
    {
      Header:'Image ',
      accessor:'image_one',
      Cell: (tableProps:any)  => (
        <img src={tableProps.row.original.image_one} style={{'width':'70px'}} />
      )}
    ,{
      Header:'Name',
      accessor:'name',
    },{
      'Header':'Actual Price',
      'accessor':'actual_price'
    },{
      'Header':'Slashed Price',
      'accessor':'slashed_price'
    },
    {
      Header:'Out of Stock',
      accessor:'out_of_stock',
      Cell :(tableProps:any)  =>tableProps.row.original.out_of_stock?<AiFillCloseCircle style={{'color':'red'}}/>:<BsFillCalendar2CheckFill style={{'color':'#f77305'}}/>
    },{
      Header:'Delete',
      accessor:'slug',
      Cell:(tableProps:any)=> <AiFillCloseCircle style={{'color':'red'}} onClick={e=>handleDelete(tableProps.row.original.slug)}/> 
    }
  ]












  useEffect(()=>{
    if(typeof shop == 'string'){
      dispatch(getProductApi({shopId:shop}))
    }
  },[shop])
  useEffect(()=>{
    if(status=='deleted'){
      notify('Deleted','error')
    }
  },[status])
  return (
    <DashboardLayout
      listOFLinks={[
        {label:'Product',route:`/dashboard/shop/${shop}`},
        {label:'Orders ',route:`/dashboard/shop/${shop}/order`},
        {label:'Wallet',route:`dashboard/shop/${shop}/wallet`},
        {label:'Logout',route:'/logout'},
      ]}
    >
      <Pane>
        {status=='pending'&&<h1>loading</h1>}
        <Button style={{'width':isLaptop?'20%':'80%'}} onClick={(e)=>route.push(`/dashboard/shop/${shop}/create-product`)}>Create Product</Button>
        <br />
        <br />
        <Table prop_columns={prop_columns}
          custom_data={data}
        />
      </Pane>
    </DashboardLayout>
      
  )
}

export default ShopDetail