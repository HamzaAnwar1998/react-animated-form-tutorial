import React from 'react'
import img from '../Images/img.png'
import { Icon } from 'react-icons-kit'
import {film} from 'react-icons-kit/feather/film'
import img3 from '../Images/img3.png'
import {twitter} from 'react-icons-kit/feather/twitter'
import {facebook} from 'react-icons-kit/feather/facebook'
import {googlePlus} from 'react-icons-kit/icomoon/googlePlus'
import {mail} from 'react-icons-kit/feather/mail'
import {lock} from 'react-icons-kit/feather/lock'
import {motion} from 'framer-motion'

// creating animations
// it will be an object
const leftsideVariants={
    // when our element is hidden or initial state
    // hidden is itself an object, you can name it anything instead of hidden
    // the element is coming from -700px position left
    hidden:{
        x: -700,
        opacity: 0
    },
    // element after state or the element when it is visible
    visible:{
        // x is position, 0 is orignal position
        x: 0,
        opacity: 1,
        transition:{
            delay:0.15,duration:0.75,type:'tween'
        }
    }
}

const rightsideVariants={
    hidden:{
        x:700,
        opacity:0
    },
    visible:{
        x:0,
        opacity: 1,
        transition:{
            delay:0.15,duration:0.75,type:'tween'
        }
    }
}

const formVariants={
    hidden:{
        x:700,
        opacity:0
    },
    visible:{
        x:0,
        opacity:1,
        transition:{
            delay:0.15,duration:0.75,type:'tween'
        }
    }
}

const rightsideFormSectionVariants={
    hidden:{
        x:-700,
        opacity:0
    },
    visible:{
        x:0,
        opacity:1,
        transition:{
            delay:0.15,duration:0.75,type:'tween'
        }
    }
}

const logoVariants={
    hidden:{        
        opacity:0
    },
    visible:{        
        opacity: 1,
        transition:{
            delay:0.5,type:'spring',stiffness:60
        }
    }
}

const signinButtonVariants={
    hover:{
        scale: 1.1,
        transition:{
            yoyo: Infinity
        }
    },
    pressed:{
        scale:0.9
    }
}

const forgetPasswordVariants={
    hover:{
        scale:1.1,       
    }
}

export const MainContainer = ({container, changeContainerState,
logoClass}) => {

    const handleChangeState=()=>{
        changeContainerState();
    }

    return (
        <div className='main-box'>
            <motion.div className={logoClass}
            variants={logoVariants} initial="hidden" animate="visible">
                <div className='icon'>
                    <Icon icon={film} size={24}/>
                </div>
                <div className='logo-text'>
                    Layer Tancap
                </div>
            </motion.div>
            {container==='initial'&&(
                <>
                {/* these are our motion elements */}
                    <motion.div className='leftside'
                    variants={leftsideVariants} initial="hidden"
                    animate="visible">
                        <h1>Welcome Back</h1>
                        <p>To keep connected with us please
                        <br></br>
                        login with your personal info</p>
                        <motion.button onClick={handleChangeState}
                        variants={signinButtonVariants}
                        whileHover="hover" whileTap="pressed">
                            SIGN IN
                        </motion.button>
                    </motion.div>
                    <motion.div className='rightside'
                    variants={rightsideVariants} initial="hidden"
                    animate="visible">
                        <img src={img} alt="rightside-img"/>
                    </motion.div>
                </>
            )}
            {
                container==='changed'&&(
                    <>
                        <motion.div className='form-section'
                        variants={formVariants}
                        initial="hidden" animate="visible">
                            <h1>Sign in using</h1>
                            <div className='signin-icons'>
                                <div className='icon facebook'>
                                    <Icon icon={facebook} size={20}/>
                                </div>
                                <div className='icon google'>
                                    <Icon icon={googlePlus} size={20}/>
                                </div>
                                <div className='icon twitter'>
                                    <Icon icon={twitter} size={20}/>
                                </div>
                            </div>
                            <p>Or use your email address</p>
                            <form autoComplete="off">
                                <div className='custom-input'>
                                    <div className='icon'>
                                        <Icon icon={mail} size={18}/>
                                    </div>
                                    <input placeholder='email'/>
                                </div>
                                <div className='custom-input'>
                                    <div className='icon'>
                                        <Icon icon={lock} size={18}/>
                                    </div>
                                    <input placeholder='password'/>
                                </div>
                                <motion.div className='forget-label'
                                variants={forgetPasswordVariants}
                                whileHover="hover">
                                    Forget your password?
                                </motion.div>
                                <br></br>
                                <motion.button type='button' 
                                className='signin-button'
                                onClick={handleChangeState}
                                variants={signinButtonVariants}
                                whileHover="hover"
                                whileTap="pressed">
                                SIGN IN
                                </motion.button>
                            </form>
                        </motion.div>
                        <motion.div className='rightside form-section'
                        variants={rightsideFormSectionVariants}
                        initial="hidden" animate="visible">
                            <h1>Hello Friends!</h1>
                            <p>Watch and share your best movies</p>
                            <div className='img'>
                                <img src={img3} alt="movie"/>
                            </div>                            
                        </motion.div>
                    </>
                )
            }            
        </div>
    )
}
