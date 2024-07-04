import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsById } from '../../data/asyncMock'
import { Box, Flex } from '@chakra-ui/react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { BounceLoader } from 'react-spinners'

const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState({})
    const { productId } = useParams()
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
    }, [])

    return (
        <Box>
            {
                loading ? 
                <Flex justify={'center'} align={'center'} h={'50vh'}>
                    <BounceLoader color='#55868C'/>
                </Flex>
                :
                <Flex justify={'center'} align={'center'} h={'70vh'}>
                    <ItemDetail {...product} />
                </Flex>
            }
        </Box>
    )
}

export default ItemDetailContainer