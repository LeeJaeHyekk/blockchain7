# yarn bulid란

- 우리가 작성한 jsx , css , js , html 파일 등등을 하나로 합쳐서 front 에서 인식할 수 있는 파일로 생성해 준다.

- Front 에서 인식 할 수 있는 파일

  - html, css, js, png, ...
  - webpack, babel 라이브러리를 사용하게 된다.
    - webpack이란 javascript 모듈 번들러
      - 파일 하나로 묶어주는 기능을 한다.
      - 난독화 , 코드 압축 등을 진행한다.
        - 난독화: 코드읽기 힘들게 바꾼다.
      - babel이란 javascript 컴파일러이다.
      - 컴파일러란 개발자가 작성하는 프로그래밍 언어(C
        ++,C# , JAVA)를 컴퓨터가 읽고 실핼할 수 있는 언어로 바꿔준다.
      - 기존에 ES6 등 최신 javascript 문법을 지원하지 않는 브라우저를 위해 ES5 이하 문법으로 수정해 준다.
    - 하나로 완성된 bulid 폴더 파일들을 Front의 파일로 배포하게 된다.
    - React 개발된 프로젝트는 yarn build(npm bulid)명령어를 실행해서 bulid폴더에 생성되는 파일로 웹 페이지를 배포한다.
    - AWS ES2 인스턴스에 bulid 폴더 내에 있는 파일, 폴더를 모두 올려 웹페이지를 출력할 수 있다.

1. sudo apt-get update

2. sudo apt-get upgrade -y

   - 여러 프로그램들을 업데이트 했다.
   - 해당 프로그램들이 컴퓨터의 재시작 시 시작할때 어떤 프로그램으로 확인을 할것인가 설정한다.

3. sudo apt-get install -y apache2 nodejs npm mysql-server

4. cd/var/www => sudo chmod 777 html-R

- chmod는 권한 설정 프로그램이다.
- 777은 모든 사용자, 모든 그룹에 대해서 모든 권한을 준다.
- -R은 하위 모든 폴더/파일에 같은 권한을 적용한다.

//----------------------- 백서버를 배포할라고 -

5.  sudo mkdir server

6.  cd server => npm install =>npm start

7.  sudo / usr/bin/mysql -u root-p

- mysql 서버에 접속한다.
- 초기 패스워드는 없다.
- 초기 패스워드 : enter

8. ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';

- root 계정의 비밀번호를 1234로 수정한다.
- 'localhost'는 현재 위치를 뜻하며 localhost =>EC2인스턴스 내의 mysql server를 뜻하다.
- exit; => sudo /usr/bin/mysql -u root -p => 설정한 비번 입력 해서 mysql에 정상적으로 접속되는지 확인하자

9. DB생성

- "mysql" << 이 상태로 출력될 때 사용한다
- show databases 현재 DB를 확인한다.
- create

10. apache의 설정을 수정한다.

- cd /etc/apache2/sites-available
- sudo vi 000-default.conf
- vi << 윈도우로 생각하면 메모장이다.
- <VirtualHost \*:80> << 80 port로 요청이 들어오면 아래의 설정으로 응답한다.
  "<VirtualHost>" 로 닫는다
- "#" 은 주석이다.
- "DocumentRoot"는 Root 폴더를 설정한다.
  - 현재는 "/var/www/html"로 설정되어 있다.
- "i" 를 입력하면 수정 모드로 변경된다.
- 입력 시에는 무조건 수정모드에서 입력해야된다.
- 수정모드를 종료할려면 esc를 입력해야한다.
- vi를 종료하고 싶을때는 수정모드가 아닌 상태로 , 즉 "--INSERT"가 없는 상태로 ":"을 입력 후에 "q","w","!"등을 입력한다.
  -"q"는 종료를 뜻한다.
  -"w"는 저장을 뜻한다.
  -"!"는 강제를 뜻한다.
  -"wq!" << 강제로 저장 후에 종료해라. "!"를 써서 강제하는 이유는 sudo를 사용했어도 저장시에 권한이 인정되지 않을수도 있다.

```
ProxyPreserveHost on
ProxyRequests Off
<proxy *>
  Order deny,allow
  Allow from all
  </Proxy>
  <Location /api>
  proxyPass http://localhost:8080/api
  proxyPassReverse http://localhost:8080/api
  </Location>

```

- ProxyPreserveHost : http 요청에 대해서 Header의 host 부분을 고정한다. << 요청을 보낸 주소를 수정하지 않는다. 클라이언트(브라우저)에서 접속한 주소를 수정하지 않고 Proxy 요청을 보낸다. 즉 Node.js에 요청을 보낼때 브라우저의 주소를 전달한다.
- ProxyRequests : On 설정의 경우 Proxy,Off 설정의 경우 ReverseProxy를 설정한다.
- Proxy: Proxy에 대한 보안 설정
  - Order : 어떤 설정을 할것인가? deny(거절),allow(허락)
  - Allow : 접속 가능한 주소를 설정한다.
    - from All << 모든 주소에서 접근 가능
    - Ex) Allow from 192.168.1.2
  - deny : 접속 불가능한 주소를 설정한다.
- Location : 접속한 라우터에 대한 설정(라우터 구분?)
  - ProxyPass : 요청할 주소 설정
  - ProxyPassReverse : 응답 받을 주소 설정

11. sudo a2enmod proxy proxy_http
    -apache의 proxy 모듈을 활성화한다.
    -apache에서 proxy를 사용하기 위해서 확장 프로그램을 활성화 한다.

12. sudo service apache2 restart

- apache2의 설정을 재시작

13. React 프로젝트 배포시 메인 홈페이지 이외의 라우터에서 새로고침 시 404가 출력되는 이슈 해결 방법

    - 원인 : apache2에서 폴더를 먼자 찾아 연결하기 떄문에 index.html(React 프로젝트)에 연뎔되지 않아 생가는 문제이다.
    - 해결방법 : apache2의 rewrite 모듈을 사용하여 수정한다.
    - 순서 :

      1. 000-default.conf 파일을 수정하자. - 아래의 내용을 입력하자.

      ```
        <Directory "/var/www/html">
        AllowOverride All
        </Directory>

      ```

      -Directory : 해당 폴더/파일에 대한 설정
      -AllowOverride : 접근 방식에 대한 보안 설정

      - All 은 새로운 접근 방식을 설정할 것 이다.(덮어쓰기 가능)

      2. .htaccess 파일을 생성한다.

      - 해당 파일 위치 : React의 public폴더 << 해당 폴더는 yarn bulid 시 그대로 bulid 폴더에 복사된다. 단, index.html 파일은 수정된다.

        - src 폴더 내의 모든 폴더/파일은 난독화 되어 저장된다.

      - 내용은 아래와 같이 입력한다.

      ```
      Options -MultiViews

      RewriteEngine On

      RewriteCond %{REQUEST_FILENAME} !-f

      RewriteRule ^ index.html [QSA,L]

      ```

      - Options
        - MultiViews : 서버의 하위 라우터가 없을 경우 비슷한 파일을 찾아서 응답한다.
      - RewriteEngine : rewrite 모듈을 사용할 것인지 설정한다.
        - On
      - RewriteCond : rewrite 모듈 적용에 대한 조건을 설정한다.
        - REQUEST_FILENAME : 서버 설정 상의 Root 폴더(/var/www/html)
        - -f : 파일이 있는지 확인한다. << 없으면 모듈을 적용한다.
      - RewriteRule : 모듈 적용 규칙
        - ^ index.html : 정규표현식으로 index.html로 수정한다.
          - ex) 123.123.3.6/어쩌구저쩌구 => 123.123.3.6/index.html
            - QSA : queryString을 붙이라는 설정
            - L : 이후 다른 설정을 무시한다.

      3. sudo a2enmod rewrite
         - reweite 모듈을 활성화한다.

- ubuntu 에서는 apache2이지만 linux에서는 httpd라고 한다.
  - 프로그램 설정이 살짝 다르다. 단, 둘 다 apache이다.

14. PM2를 사용해서 Node.js의 Express 서버를 백그라운드에서 실행시키자.

- PM2는 Node.js 프로세스를 관리하는 라이브러리이다.
- 간단하게 설명하면 백그라운드에서 실행시켜두고 멈추고 등등 할 수 있다.
- 순서
  1. sudo npm i -g pm2
  2. sudo pm2 start npm -- start << 경로는 서버의 경로(/var/www/server)에서 ES6문법을 쓰면 이코드를 써야됨
  3. sudo pm2 list << 프로그램을 확인한다.
  4. sudo pm2 stop npm
