export const testRoute = {
    path: '/api/test',
    method: 'get',
    handler: (req, res) => {
        console.log('it works fine');
        res.status(200).send('It works!');

    },
};