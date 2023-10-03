import Cabecalho from '../Cabecalho';
import Rodape from '../Rodape';
import styles from './CriarCategoria.module.css';
import { useState } from 'react';
import { useEffect } from 'react';



export default function CriarCategoria(){

    const [lista, setLista] = useState(null);
    const [descricao, setDescricao] = useState('');
    const [nome, setNome] = useState('');
    const [cor, setCor] = useState('');
    const [codigoSeguranca, setCodigoSeguranca] = useState('');

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/livia070303/alura-flix/videos')
          .then(resposta => resposta.json())
          .then(dados => {
            setLista(dados)
        })
      }, [])

      function submit(){

        //valida os campos e se estiver tudo certo continua



        //ajustar os dados com os campos corretos
        //ajustar o fetch acima para pegar da api de categoria
        const dados = {
            "id": 1,
            "nome": "Data Science",
            "texto": "Coisas de R e Python que venho aprendendo",
            "cor": "#69953B",
            "codigo-seguranca": "0010"
          }
    
        alert("submit");

        ///manda pra api salvar o valor da cadastro da categoria // fazer post pra api

        setLista([...lista, dados]);

      }
    

    return(
        <>
            <Cabecalho />
                <div className={styles.criarCategoria}>
                    <h1 className={styles.titulo}>Novo categoria</h1>

                    <div className={styles.campoInputCategoria}>
                        <input className={styles.nome}   required placeholder='Nome' value={nome} onChange={ (event) => setNome(event.target.value)} />
                            
                        <textarea className={styles.texto} value={descricao} onChange={ (event) => setDescricao(event.target.value)} placeholder="Todos os vídeo da área de Front End juntarei nessa categoria para organizar os estudos que venho fazendo atualmente"></textarea>
                        
                        <div className={styles.cor}>
                            <label for="cor">Cor</label>
                            <input id="cor" className={styles.inputCor} required placeholder="Cor" type='color'  value={cor} onChange={ (event) => setCor(event.target.value)}/>
                        </div>
                        
                            
                        <input className={styles.codigoSeguranca} required placeholder='Código de segurança' value={codigoSeguranca} onChange={ (event) => setCodigoSeguranca(event.target.value)}/>

                        <div className={styles.campoBotao}>
                            <button className={styles.botaoSalvar} onClick={submit}>Salvar</button>
                            <button className={styles.botaoLimpar}>Limpar</button>
                        </div>
                    </div>
                        
                </div>

                <div className={styles.tabelaPrincipal}>
                    <table className={styles.tabela}>
                        <tr>
                            <th className={styles.bordaAzul}>Nome</th>
                            <th className={styles.bordaAzul}>Descrição</th>
                            <th className={styles.bordaAzul}>Editar</th>
                            <th className={styles.bordaAzul}>Remover</th>
                        </tr>
                        {lista?.map((row) => (
                            <tr key={row.id}>
                                <td>{row.categoria}</td>
                                <td>{row.texto} </td>
                                <td>Editar</td>
                                <td>Remover</td>
                            </tr>
                        ))}
                    </table>

                </div>
            <Rodape />
        </>
        
    )
}