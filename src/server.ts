import { http } from './http';

const port = 3001;

http.listen(port, () => {
    console.log(`Server listening on ${port}`);
});