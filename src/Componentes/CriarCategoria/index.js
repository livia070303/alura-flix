import Cabecalho from '../Cabecalho'
import Rodape from '../Rodape'
import styles from './CriarCategoria.module.css'

export default function CriarCategoria(){
    return(
        <>
            <Cabecalho />
                <div className={styles.criarCategoria}>
                    <h1 className={styles.titulo}>Novo categoria</h1>

                    <div className={styles.campoInputCategoria}>
                        <input className={styles.nome}   required placeholder='Nome' />
                            
                        <textarea className={styles.texto} placeholder="Todos os vídeo da área de Front End juntarei nessa categoria para organizar os estudos que venho fazendo atualmente"></textarea>
                        
                        <div className={styles.cor}>
                            <label for="cor">Cor</label>
                            <input id="cor" className={styles.inputCor}  required placeholder="Cor" type='color'  />
                        </div>
                        
                            
                        <input className={styles.codigoSeguranca} required placeholder='Código de segurança' />

                        <div className={styles.campoBotao}>
                            <button className={styles.botaoSalvar}>Salvar</button>
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
                        <tr>
                            <td>Back End</td>
                            <td>Todos os vídeo que estou usando para estudar Back End </td>
                            <td>Editar</td>
                            <td>Remover</td>
                        </tr>
                        <tr>
                            <td>Mobile</td>
                            <td>Conteúdo que venho estudando sobre React Native e Flutter </td>
                            <td>Editar</td>
                            <td>Remover</td>
                        </tr>
                        <tr>
                            <td>Infraestrutura</td>
                            <td>Tudo que estou aprendendo sobre Docker e muito mais</td>
                            <td>Editar</td>
                            <td>Remover</td>
                        </tr>
                        <tr>
                            <td>Data Science</td>
                            <td>Coisas de R e Python que venho aprendendo</td>
                            <td>Editar</td>
                            <td>Remover</td>
                        </tr>
                        <tr>
                            <td>Design e UX</td>
                            <td>Ferramentas e técnicas que estudo sobre UX e Design</td>
                            <td>Editar</td>
                            <td>Remover</td>
                        </tr>
                        <tr>
                            <td>Marketing Digital</td>
                            <td>A forma de vender a monetizar minhas ideias</td>
                            <td>Editar</td>
                            <td>Remover</td>
                        </tr>
                        <tr>
                            <td>Inovação e Gestão</td>
                            <td>Como manter o time feliz e muito mais</td>
                            <td>Editar</td>
                            <td>Remover</td>
                        </tr>
                    </table>

                </div>
            <Rodape />
        </>
        
    )
}