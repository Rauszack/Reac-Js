import { Center, Flex, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { BounceLoader } from 'react-spinners'
import { db } from '../../config/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = ({ title }) => {
  const [ productos, setProductos ] = useState([])
  const { categoryId } = useParams()
  const [ loading, setLoading ] = useState(true)

  useEffect(()=> {
    setLoading(true)
      const getData = async () => {
        const coleccion = collection(db, 'productos')

        const queryRef = !categoryId ? 
        coleccion : query(coleccion, where('categoria', '==', categoryId))

        const response = await getDocs(queryRef)
        const products = response.docs.map((doc) => {
          const newItem = {
            ...doc.data(), 
            id: doc.id 
          }
          return newItem
        })
        setProductos(products)
        setLoading(false)
      }
      getData()
  }, [categoryId])
  
  return (
    <Flex direction={'column'} justify={'center'} align={'center'}>
        <Heading mt={5} color={'#3F747D'}>{title}</Heading>
        {
          loading ?
          <Flex justify={'center'} align={'center'} h={'50vh'}>
            <BounceLoader color='#55868C'/>
          </Flex>
          :
          <ItemList productos={productos} />
        }
    </Flex>
  )
}

export default ItemListContainer