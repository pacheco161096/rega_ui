import React from 'react';
import { useSelector } from 'react-redux';

const Cards = () => {
  const data = useSelector(state => state.cards.cards)

  return (
    <section className='mb-10 relative z-10'>
      <div className="mx-auto max-w-7xl p-6 lg:px-8 grid md:grid-cols-3 gap-5">
        {data.map( (card, index) => {
          return (
          <div className="flex flex-col rounded-lg min-h-64 relative" key={card.titulo}>
            <img src={`./assets/image${index+1}.avif`} alt="" className=' object-cover rounded-2xl' />
            <div className="flex flex-col justify-center absolute left-0 bottom-0 w-full p-4 text-white z-10">
              <h3 className='font-bold text-xl'>{card.titulo}</h3>
              <p className='text-sm'>{card.description}</p>
            </div>
            <div className='w-full absolute bottom-0 left z-0 bg-gradient-to-t from-[#000a25] from-0% min-h-[80%] rounded-2xl'></div>
          </div> 
          )
        })}
      </div>
    </section>
  );
}

export default Cards;
