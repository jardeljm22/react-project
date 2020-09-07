import React from 'react'
import Card from './components/promotion/card/Card'

const promotion = {
    title : 'mecbook pro intel core 8º geração 2.3ghz ssd 500gb m2',
    preco : 2.777,
    link : '',
    comments:[{
        id: 1,
        coment : 'muito bom'
    }]



}

const app = ()=>{
    return(
        <Card prom={promotion} />
    )
}
export default app