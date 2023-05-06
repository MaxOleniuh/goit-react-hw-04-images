import {LoaderStyled} from './Loader.styled'
import { TailSpin } from 'react-loader-spinner';
const Loader = () => {
    return (
       <LoaderStyled>
            <TailSpin
  height="80"
  width="80"
  color="#1e5187"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>   
       </LoaderStyled> 
    )
}
export default Loader;