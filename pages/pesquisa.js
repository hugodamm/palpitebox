import React, {useState} from 'react'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {
    const notas = [0, 1, 2, 3, 4, 5]

    const [form, setForm] = useState({
        Nome: '',
        Email: '',
        WhatsApp: '',
        Nota: 0
    })

    const [ sucess, setSucess ] = useState(false)
    const [ retorno, setRetorno ] = useState({})

    const save = async () => {
        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })
            const data = await response.json()
            setSucess(true)
            setRetorno(data)
        } catch (err) {
        }
    }

    const onChange = evt => {
        const value = evt.target.value
        const Key = evt.target.name
        setForm(old => ({
            ...old, 
            [Key]: value
        }));
    }

    return (
        <div className='pt-6'>
            <PageTitle title='Pesquisa' />
            <h1 className='text-center font-bold my-4 text-2xl'>Críticas ou sugestões</h1>
            <p className='text-center mb-6'> O restaurante X sempre busca por atender melhor seus clientes.<br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            { !sucess && <div className='w-80 mx-auto'>
                <label className='font-bold'>Seu nome:</label>
                <input type='text' className='w-80 p-4 block shadow bg-blue-100 my-2 rounded' placeholder='' onChange={onChange} name='Nome' value={form.Nome}></input>
                <label className='font-bold'>E-mail:</label>
                <input type='text' className='w-80 p-4 block shadow bg-blue-100 my-2 rounded' placeholder='' onChange={onChange} name='Email' value={form.Email}></input>
                <label className='font-bold'>WhatsApp:</label>
                <input type='text' className='w-80 p-4 block shadow bg-blue-100 my-2 rounded' placeholder='' onChange={onChange} name='WhatsApp' value={form.WhatsApp}></input>
                <label className='font-bold'>Sua crítica ou sugestão:</label>
                <input type='text' className='w-80 p-4 block shadow bg-blue-100 my-2 rounded' placeholder='' onChange={onChange} name='CritSuge' value={form.CritSuge}></input>
                <label className='font-bold w-96'>Que nota você daria para o estabelecimento:</label>
                
                <div className='flex py-4'>
                    {notas.map(nota => {
                        return (
                            <label className='block w-1/6 text-center'>
                                {nota}<br />
                                <input type='radio' name='Nota' value={nota} onChange={onChange} ></input>
                            </label>
                        )
                    }
                    )}
                </div>
                
                <div className='text-center mb-4'>
                    <button className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow' onClick={save}>Salvar</button>
                </div>

            </div>}
            {sucess && <div className='w-1/5 mx-auto'>
                <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>Obrigado por contribuir com sua sugestão ou crítica.</p>
                {
                    retorno.showCoupon && <div className='text-center border p-4 mb-4 '>
                        Seu cupom: <br />
                        <span className='font-bold text-2xl'>{retorno.Cupom}</span>
                    </div>
                }
                {
                    retorno.showCoupon && <div className='text-center border p-4 mb-4'>
                        <span className='font-bold'>{retorno.Promo}</span>
                        <br /><br />
                        <span className='italic'>Tire um print ou foto desta tela e apresente ao garçom.</span>
                    </div>
                }
            </div>}

            {/* <div className='w-80 mx-auto'>
                <label className='font-bold'>Você indicaria para um amigo ?</label>
                <div className='py-4 text-center mx-auto'>
                    <input className='w-8' type='radio' name='Sim'></input>
                    <label>Sim</label>
                    <input className='w-8' type='radio' name='Nao'></input>
                    <label>Não</label>
                </div>
            </div> */}

        </div>
    )
}

export default Pesquisa