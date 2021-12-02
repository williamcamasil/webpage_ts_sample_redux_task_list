import * as actionTypes from "./actionTypes" //importamos a padronizacao das acoes

// Criando uma funcao com 1 parametro da type.d.ts com relacao as variaveis (id, title, body)
export function addArticle(article: IArticle) {
    // Indicamos o tipo de acao e a insercao (id, title, body)
    const action: ArticleAction = {
        type: actionTypes.ADD_ARTICLE,
        article,
    }

    // Simulando uma requisicao HTTP assincrona com a acao que adicionamos
    return simulateHttpRequest(action)
}

export function removeArticle(article: IArticle) {
    //Agora com a acao de remover o artigo (id, title, body)
    const action: ArticleAction = { //Usamos a ArticleAction para disparar a acao
        type: actionTypes.REMOVE_ARTICLE,
        article,
    }
    return simulateHttpRequest(action)
}

// Metodo de retorno da funcao assincrona a qual passamos a action como parametro (ADD ou REMOVE)
export function simulateHttpRequest(action: ArticleAction) {
    // Emitimos o dispatch da acao por parametro, para acionar a acao solicitada
    return (dispatch: DispatchType) => {
        setTimeout(() => { //setTimeout so esta aqui para simular o tempo de demora da resposta da acao
            dispatch(action) //Dessa forma o Reducer e acionado com base na ACAO solicitada
        }, 500)
    }
}