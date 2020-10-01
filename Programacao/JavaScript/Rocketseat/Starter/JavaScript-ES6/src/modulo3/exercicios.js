import axios from 'axios';

// Funão delay aciona o .then após 1s
/*const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
function umPorSegundo() {
    delay().then(() => {
        console.log('1s');
        delay().then(() => {
            console.log('2s');
            delay().then(() => {
                console.log('3s');
            });
        })
    });
}*/

/*const delay = async () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async () => {

    await delay();
    console.log('1s');

    await delay();
    console.log('2s');

    await delay();
    console.log('3s');

}

umPorSegundo();*/


// 2 
/*async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);

    } catch (err) {
        console.log('Usuário não existe');

    }
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');*/


// 3

/*class Github {
    static  async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);

        } catch (err) {
            console.log('Repositório não existe');
        }
    }
}
Github.getRepositories('matheusgomesweb/matheusgomesweb');
Github.getRepositories('rocketseat/dslkvmskv');*/

// 4

const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response.data);
    } catch(err) {
        console.log('Usuário não existe');
    }
}
buscaUsuario('diego3g');