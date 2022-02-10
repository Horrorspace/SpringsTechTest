import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {ServeStaticModule} from '@nestjs/serve-static';
import {join} from 'path';


@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, 'client'),
            exclude: ['/api/*', '/public/*']
        }),
    ],
    exports: []
})
export class AppModule {}