
import {Button} from 'antd'
import usePing from '../../../hooks/apis/queries/usePing';

function Ping() {

    const {isLoading , data}= usePing();
  
    if(isLoading){
      return (
        <>
          <h1>Loading...</h1>
        </>
      )
    }
  
    return (
      <>
        <Button type="primary" ghost>
          Primary {data.message}
        </Button>
      </>
    )
  }
  
  export default Ping