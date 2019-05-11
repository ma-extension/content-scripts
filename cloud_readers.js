const CLOUD_READERS = [
    {
        name: 'onepiece-ex',
        hostname: 'onepieceex.net',
        regex_expression: /https:\/\/onepieceex\.net\/mangas\/leitor\/(?<cap>[a-zA-Z0-9\-\_\%]*)\/#(?<page>[0-9]*)/,
        exclusive_for: 'One Piece',
        icon: 'https://onepieceex.net/favicon/favicon-32x32.png'

    },
    {
        name: 'central-de-mangas',
        hostname: 'cdmnet.com.br',
        regex_expression: /http:\/\/cdmnet\.com\.br\/titulos\/(?<manga>[a-zA-Z0-9\-\_\%]*)\/manga\/ler-online\/(?<cap>[a-zA-Z0-9\-\_\%]*)#(?<page>[0-9]*)$/,
        icon: 'http://cdmnet.com.br/favicon.ico'
    },
    {
        name: 'manga-livre',
        hostname: 'mangalivre.com',
        regex_expression: /https:\/\/mangalivre\.com\/manga\/(?<manga>[a-zA-Z0-9\-\_\%]*)\/[0-9]*\/(?<cap>[a-zA-Z0-9\-\_\%]*)#(?<page>[a-zA-Z0-9\-\_\%]*)$/,
        icon: 'https://mangalivre.com/assets/images/favicon.png'
    }
]
