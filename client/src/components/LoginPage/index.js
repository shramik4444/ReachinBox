import {Component} from 'react'
import Header from '../Header'
import './index.css'

class LoginPage extends Component{

    submitform = (event) => {
            event.preventDefault()
    }


render(){

return(
<div className='bg-cont'>
    <Header />
    
    <div className='logo-cont'>
         <img className='img-style' src="https://s3-alpha-sig.figma.com/img/37f3/2626/1680d9613629542a2474f79f92f7c022?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pEixXZm3Oa~HQGQbPCaHtUvTwKiYNl3z3-96HB4DdYWCyOumtzRcRE6Uxwepwhw1HWCom60ZKU6oZTQTXBYbpdGQHqy1UPQrELDx8qrQSla7EmAYFd~~qzRmBLzxVYXUtpYhNMv2Dmv-vSJBugbZSBf5B38s0R023vuHEW~vZ~~IWlLRSzMMSwCV04Xl9NfaGRCyDbWgu1zdQoSbi7o1SQ5NtcOQDHNkPsn7t7KHJqr4zYDzuerqAJt~E-LjpERfNhZZCYIiHmgMrSuieYwOuYVgO0t8IZHKG5vpvA8xh0iZYmbGO1O122WausqmAux7f899JmutovkNG5J47UeSBA__"/>
    </div>
    <hr className="solid-line"/>
    <div className='second-div'>
        <form className='form-container' onSubmit={this.submitform}>
            <h1>Create a new account</h1>
            <div className='google-div'>
                <p>Sign Up with Google</p>
            </div>
            <button type='submit'>Create an Account</button>
            <p>Already have an Account? Sign In</p>
        </form>
    </div> 
    <hr className="solid-line"/>   
</div>



)



}
    }
export default LoginPage