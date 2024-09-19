import Hapi from '@hapi/hapi';
import { AppDataSource } from './db/dbConfig';
import userRoutes from './routes/userRoutes';

const init = async () => {
    const server: Hapi.Server = Hapi.server({
        port: 3000,
        host: 'localhost',
    });
    try {
        await AppDataSource.initialize();
        console.log('Data Source has been initialized!');
      } catch (error) {
        console.error('Error initializing Data Source:', error);
        process.exit(1);
      }

    // Basic route
    server.route({
        method: 'GET',
        path: '/',
        handler: (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
            return { message: 'Hello, Hapi with TypeScript!' };
        }
    });

    // Start the server
    server.route(userRoutes);
    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
