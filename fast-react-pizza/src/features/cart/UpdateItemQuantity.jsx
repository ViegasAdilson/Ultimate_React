import { useDispatch} from 'react-redux'
import Button from '../../ui/Button'
import { decreaseItemQuantitty, increaseItemQuantitty } from './cartSlice'

/* eslint-disable react/prop-types */
function UpdateItemQuantity({pizzaId, currentQuantity}) {
  const dispatch = useDispatch()
 

  return (
    <div className=' flex gap-2 items-center md:gap-3'>
      <Button type='round' onClick={() => dispatch(decreaseItemQuantitty(pizzaId))}>-</Button>
      <span className='test-sm font-medium'>{currentQuantity}</span>
      <Button type='round' onClick={() => dispatch(increaseItemQuantitty(pizzaId))}>+</Button>
    </div>
  )
}

export default UpdateItemQuantity
