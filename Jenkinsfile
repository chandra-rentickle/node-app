pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/chandra-rentickle/node-app.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        // stage('Test') {
        //     steps {
        //         sh 'npm test'
        //     }
        // }
        // stage('Deploy') {
        //     steps {
        //         sh 'npm run deploy'
        //     }
        // }
    }
}
