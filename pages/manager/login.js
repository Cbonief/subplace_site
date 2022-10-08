import styles from '../../styles/Manager_login.module.css'
import TemplatePage from '../../components/PageTemplate';

import { auth , signInWithEmailAndPassword} from '../../utils/firebase';

import {useState} from 'react';

import { useRouter } from 'next/router';

import { connect } from 'react-redux';
import { recognizedManager, logoutManager} from '../../redux/actions/loginManager';

function ManagerLogin(props) {
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const router = useRouter();


  async function test(e){
    e.preventDefault();
    signInWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      const user = userCredential.user;
      props.recognizedManager();
      // router.push('/manager/menu_editor');
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
  }

  return (
    <TemplatePage>
      <div className={styles.section}>
        <div className='center'>
          <h2>Login</h2>
        </div>
        <form className={styles.form} onSubmit={test}>
          <label for="username">Username </label>
          <input className={styles.inputs} autoComplete="username" type="text" name="username" placeholder="Enter Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>

          <label for="password">Password </label>
          <input className={styles.inputs} autoComplete="password" type="password" name="password" placeholder="Enter Password" value={password}  onChange={(e)=>setPassword(e.target.value)}/>

          <button className={styles.button} type="submit">Login</button>
        </form>
      </div>
    </TemplatePage>
  )
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

export default connect(mapStateToProps, mapDispatchToProps)(ManagerLogin);