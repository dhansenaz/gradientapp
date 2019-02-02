
let gradients = [
    {
        id:1,
        category:'purple',
        title:'midnight',
        style:'background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);',
        button:'get code'

    },
    {
        id:2,
        category:'blue',
        title:'skyline',
        style:'background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);',
        button:'get code'

    }




]

module.exports = {

    read: (req, res) => {
        res.status(200).send(gradients)


}
}