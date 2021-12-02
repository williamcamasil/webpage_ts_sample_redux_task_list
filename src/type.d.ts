// Declaracao das variaveis e seus tipos
interface IArticle {
    id: number
    title: string
    body: string
}

// Eu entendi que estou transformando a variavel articles em uma lista do tipo IArticle
type ArticleState = {
    articles: IArticle[]
}

//Aqui seria um outro tipo de acao com o artigo sendo unico 
type ArticleAction = {
    type: string
    article: IArticle
}

//Nao entendi essa expressao [BUSCAR MAIS INFORMACOES]
type DispatchType = (args: ArticleAction) => ArticleAction