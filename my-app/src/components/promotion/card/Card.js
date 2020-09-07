import React from 'react'
import './card.css'

const Promotion = ({prom}) => {  

    return(
        <div className="promotion-card" >       
           <img src="./índice.jpg" alt="foto do pc" className="promotion-card__image"></img>         
           <div className="promotion-card__info" >
               <h1 className="promotion-card__title" >{prom.title}</h1>
                <p className="promotion-card__preco" > R$ {prom.preco}</p>
                <footer className="promotion-card__footer" >
                    {
                    prom.comments.length > 0 && 
                    ( <div className="promotion-card-__coment-1" >"{prom.comments[0].coment}"</div> )                  
                    }
                    <div className="promotion-card__coments-total" >
                    {prom.comments.length} {prom.comments.length > 1 
                    ? 'comentários' :'comentário'}</div>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="promotion-card__link" >ir para o site</a>
                </footer>
           </div>
        </div>

    )
}

export default Promotion