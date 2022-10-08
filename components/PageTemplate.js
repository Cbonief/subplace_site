import { useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { recognizedManager, logoutManager} from '../redux/actions/loginManager';


function TemplatePage(props){

    function logout(){
        props.logoutManager();
    }

    return (
        <>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
            <a href="tel:561-852-8390" className="call-floater">
                <FontAwesomeIcon icon={faPhone} size='2x' color='white'/>
            </a>
            {props.managerAuthed &&
                <div className="logout-floater">
                    <button onClick={logout} className="logout-floater-button">Oi</button>
                    <p>Logout</p>
                </div>
            }
        </>
    );
}

function mapStateToProps(state) {
    return {
      managerAuthed: state.admin_logged_in
    };
}
  
const mapDispatchToProps = {
    recognizedManager,
    logoutManager
}
  
export default connect(mapStateToProps, mapDispatchToProps)(TemplatePage);
