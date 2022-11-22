import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

const Header = () => {
    return (
        <React.Fragment>
            <div className={styles.wrapper}>
                <div className='container mx-auto'>
                    <Link href='/'>
                        <img className='mx-auto' src='/logo_palpitebox.png' alt='PalpiteBox' />
                    </Link>
                </div>
            </div >
            <div className='bg-gray-300 p-4 shadow-md text-center'>
                <Link className='px-2 hover:underline' href='/sobre'>
                    Sobre
                </Link>
                <Link className='px-2 hover:underline' href='/contato'>
                    Contato
                </Link>
                <Link className='px-2 hover:underline' href='/pesquisa'>
                    Pesquisa
                </Link>
            </div>
        </React.Fragment>
    )
}

export default Header
