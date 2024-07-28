import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter'
import { Button, Flex, Heading } from '@chakra-ui/react'

const ItemCount = ({initialValue, stock, onAdd}) => {
    const { count, incrementar, decrementar } = useCounter(initialValue, stock)

  return (
    <Flex>
        <Button 
          onClick={decrementar}
          background={'#191520'} 
          color={'blanchedalmond'}
          _hover={{ bg: '#191520', cursor: 'pointer' }}
          >
            -
        </Button>
        <Heading mx={3} color={'#191520'}>{count}</Heading>
        <Button 
          onClick={incrementar}
          background={'#191520'} 
          color={'blanchedalmond'}
          _hover={{ bg: '#191520', cursor: 'pointer' }}
          >
            +
        </Button>
        <Button 
          onClick={() => onAdd(count)}
          background={'#191520'} 
          color={'blanchedalmond'}
          ml={3}
          _hover={{ bg: '#191520', cursor: 'pointer' }}
          >
          Agregar al carrito
        </Button>
    </Flex>
  )
}

export default ItemCount