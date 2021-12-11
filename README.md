# 👀 연애의 참견 (Front-End)
![998](https://user-images.githubusercontent.com/87135478/145660246-125080fe-e615-434e-a9dc-032f16056348.png)


>**썸인지 아닌지 궁금하시다구요? 연애와 관련된 고민이 있으시다구요?  
>사연을 올리면 참견쟁이들이 속시원하게 해결해줄거에요!**

<br />   
  
- [\[사이트 바로가기\]](https://www.naver.com/)  
- [\[시연영상 구경하기\]](https://www.naver.com/)  

<br />

# 👥 멤버
- Back-end: [김종욱](https://github.com/bellpro), [김주란](https://github.com/joorani), [오규화](https://github.com/59-devv)
- Front-end: [신항민](https://github.com/ssinking91), [전용태](https://github.com/yong313), [정종찬](https://github.com/youHaveToDo)
- [\[Front-End Github\]](https://github.com/youHaveToDo/FE_interfereOfLove)
<br />

# 🗓 프로젝트 기간
- 2021년 12월 6일 ~ 2021년 12월 11일 (6일 간)

<br />

# 🧩 와이어프레임
<center><img src="https://user-images.githubusercontent.com/87135478/145660015-1941ac00-d700-4a32-b5d5-b39a7e4a545c.png" width="800"></center>

<br />

# 🗺 ER Diagram
<center><img src="https://user-images.githubusercontent.com/87135478/145659978-cf2a9f3f-623a-4dc9-8549-2407e1b55d72.png" width="800"></center>

<br />

# ⚙️ 기술 스택

### Back-End

<div>
  <img src="https://img.shields.io/badge/JAVA-007396?style=for-the-badge&logo=java&logoColor=white">
  <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=white">
  <img src="https://img.shields.io/badge/Springboot-6DB33F?style=for-the-badge&logo=Springboot&logoColor=white">
  <img src="https://img.shields.io/badge/gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white">
  <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
  <img src="https://img.shields.io/badge/swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black">
  <img src="https://img.shields.io/badge/aws-232F3E?style=for-the-badge&logo=AmazonAWS&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

</div>  

### Front-End

<div>
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=black">
  <img src="https://img.shields.io/badge/aws-232F3E?style=for-the-badge&logo=AmazonAWS&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">  
  
</div>

<br />

# 📌 API 명세서

- 연애의 참견 API
    
    | 페이지 | 기능 | Method | URL | Request | Response |
    | --- | --- | --- | --- | --- | --- |
    | 메인페이지 | 게시글 조회 | GET | /home |  | \[<br/>{'article_id': article_id,<br/>"username" : username,<br/> 'type': type, <br/>'nickname': nickname,<br/> 'title': title,<br/> 'createDate': createDate},<br/>\] | 
    | 작성페이지 | 게시글 작성 | POST | /api/article | {"type": type, <br/>"title": title, <br/>"content": content} |  |
    | 상세페이지 | 게시글 수정 | PUT | /api/article/{article_id} | {"title": title,<br/> "content": content} |  |    
    |  | 게시글 상세 | GET | /article/{article_id} |  | {'article_id': article_id, <br/>'type': type, <br/>'nickname': nickname, <br/>'title': title, <br/>'content': content, <br/>'createDate': createDate, <br/>'greenCount': greenCount, <br/>'redCount': redCount} | |
    |  | 게시글 삭제 | DELETE | /api/article/{article_id} |  |  |
    |  | 그린라이트 | POST | /api/article/{article_id}/green |  |  |
    |  | 레드라이트 | POST | /api/article/{article_id}/red |  |  |
    |  | 댓글 좋아요 | POST | /api/comment/{comment_id}/like |  |  |
    |  | 댓글조회 | GET | /api/{article_id}/comment |  | [<br/>{'comment_id': comment_id,<br/>'nickname': nickname,<br/>'comment': comment,<br/>'likeCommentCount': likeCount,<br/>'createDate': createDate},<br/>] |  |
    |  | 댓글 작성 | POST | /api/commnet/{article_id} | {"comment" : comment} |  |
    |  | 댓글 삭제 | DELETE | /api/commnet/{comment_id} |  |  |
    | 로그인 |  | POST | /user/signin | {"username": username,<br/> "password" : password} |  | 
    | 로그아웃 |  |  |  |  |  |  |
    | 회원가입 | 회원가입 | POST | /user/signup | {"username" : username,<br/>"nickname" : nickname,<br/>"password" : password,<br/>"password2" : password2} |  | 

<br />

# 🔑 페이지 설명

* 로그인 페이지  
  \- 가입된 회원의 정보와 일치하는지 확인 후, 일치할 경우 로그인 성공  
  
* 회원가입 페이지  
  \- 아이디 : 중복확인 / 영어 소문자, 숫자 혼합 3-12자  
  \- 닉네임 : 중복확인 / 영어 대소문자 숫자, 한글 3-10자  
  \- 비밀번호 : 영어 대소문자, 숫자, 특수문자 혼합 4-12자  
  \- 비밀번호 확인 : 위 비밀번호와 일치하는지 확인  
  
* 메인 페이지  
  \- 전체 게시글 조회 기능  
  
* 게시글 상세 페이지  
  \- 그린라이트 게시판 : 그린라이트 / 레드라이트 버튼을 통한 투표 기능  
  \- 고민상담 게시판 : 글쓴이의 고민 상담을 도와주는 댓글 기능  

<br />

# 💡 Trouble Shooting

<details>
  <summary>1. Import로 불러온 input 컴포넌트에는 useRef를 사용하여 dom에 접근할 수 없다.</summary>
  <br />
  <div>
    → useRef로는 자식 컴포넌트 직접 접근할 수 없기 때문에 forwardRef를 사용해서 props로 ref값을 받아옴
  </div>
</details>

<details>
  <summary>2. 리액트에서 input의 value에 임의로 값을 지정하면 value 속성 값으로만 컨트롤 할 수 있는 권한이 생기고, 사용자는 권한이 없기 때문에 input에 값을 넣으려고 해도 넣을 수 없게 된다.</summary>
  <br />
  <div>
    → input 태그에 onChange 이벤트를 활용하여 수정이 완료된 value의 값을 가져올 수 있도록 하거나 input태그가 아닌 textarea 태그로 변경하여 innerText로 접근한다.
  </div>
</details>

<details>
  <summary>3. 스토어에 저장하지 않고 비통기 통신으로 바로 가져오는 데이터는 새로고침을 하지 않으면 화면에 변경된 데이터가 적용되지 않는다. </summary>
  <br />
  <div>
    → 이 부분은 리듀서를 초반에 만들지 않았기 때문에 다시 만들기보다는(이미 수정하기에는 너무 뒤로 돌아가야 해서..) useState를 통해서 임의의 상태를 만들고 onClick 이벤트를 붙여서 이벤트가 발생함과 동시에 비동기 통신과 state의 변화를 일으켜 화면이 변화하도록 만들었다
  </div>
</details>
