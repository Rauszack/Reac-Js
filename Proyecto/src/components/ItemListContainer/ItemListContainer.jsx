import { Center, Flex, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../data/asyncMock'
import ItemList from '../ItemList/ItemList'
import { Form, useParams } from 'react-router-dom'
import { BounceLoader } from 'react-spinners'

const ItemListContainer = ({ title }) => {
  const [ productos, setProductos ] = useState([])
   
  useEffect(()=> {

    getProducts()
      .then((prod) => setProductos(prod))
      .catch((error) => console.log(error))

  }, [])

  return (
    <Flex direction={'column'} justify={'center'} align={'center'}>
        <Heading mt={5}>{title}</Heading>
        <ItemList productos={productos} />
    </Flex>
  )
}

export default ItemListContainer