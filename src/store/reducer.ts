import * as actionTypes from "./actionTypes"

// Aqui criamos o estado inicial das variaveis (id, title e body) podendo ser ja iniciada ou sem dados
const initialState: ArticleState = { //usamos o type.d.ts para trazer as declaracoes com seus respectivos tipos
    articles: [
        {
            id: 1,
            title: "post 1",
            body:
                "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
        },
        {
            id: 2,
            title: "post 2",
            body:
                "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
        },
    ],
}

// O reducer sera o responsavel por gerenciar a evolucao dos dados, permitindo assim executar as acoes solicitadas pelo ||actionCreators||
const reducer = ( //parametro do estado inicial, e acao solicitada (add, remove) | com o tipo de estado
    state: ArticleState = initialState,
    action: ArticleAction
): ArticleState => {
    switch (action.type) { // Executando de acordo com o tipo de acao
        case actionTypes.ADD_ARTICLE:
            const newArticle: IArticle = {
                id: Math.random(), // not really unique
                title: action.article.title,
                body: action.article.body,
            }
            return {
                ...state,
                articles: state.articles.concat(newArticle),
            }
        case actionTypes.REMOVE_ARTICLE:
            const updatedArticles: IArticle[] = state.articles.filter(
                article => article.id !== action.article.id
            )
            return {
                ...state,
                articles: updatedArticles,
            }
    }
    return state
}

export default reducer