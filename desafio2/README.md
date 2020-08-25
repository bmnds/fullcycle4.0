# Desafio 2 - Autenticando em uma SPA com o Keycloak
Desafio disponibilizado, em: https://maratona.fullcycle.com.br/desafios/autenticacao-utilizando-keycloak/

### Passo 1 - Configurando do zero
Seguindo o passo-a-passo disponibilizado, em: https://www.keycloak.org/getting-started/getting-started-docker

1. Rodar o Keycloak
```bash
$ docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin quay.io/keycloak/keycloak:11.0.1
```

2. Criar o realm 'myrealm'

3. Criar o usuário 'myuser'

4. Verificar o acesso do usuário ao realm em http://localhost:8080/auth/realms/myrealm/account

5. Criar o client 'myclient' com o Root Url `https://www.keycloak.org/app`

6. Verificar acesso a partir da SPA https://www.keycloak.org/app

* Os passos 2, 3, 4 e 5 podem ser substituídos com a importação do realm a partir do arquivo `myrealm.json`
