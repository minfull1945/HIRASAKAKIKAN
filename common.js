
function login() {
    // 入力されたユーザー名とパスワードを取得
    var userName = document.getElementById('user_name').value;
    var password = document.getElementById('password').value;

    // ここで確認するユーザー名とパスワードを指定
    var correctUserName = 'staff';
    var correctPassword = '12345';

    // ユーザー名とパスワードが一致していればstaff_home.htmlに遷移
    if (userName === correctUserName && password === correctPassword) {
        window.location.href = 'staff_home.html'; // ページ遷移
    } else {
        window.location.href = 'error.html'; // ページ遷移
    }

}

//ドキュメント1
function document1_permit() {
    var password = document.getElementById('document1_textbox').value;
    
    var correctPassword = 'takama2024hr';
    
     if (password === correctPassword) {
        window.location.href = 'document1.html'; // ページ遷移
    } else {
        window.location.href = 'error.html'; // ページ遷移
    }
}

//ドキュメント２
function document2_permit() {
    var password = document.getElementById('document2_textbox').value;
    
    var correctPassword = 'amagasaki2021';
    
    if (password === correctPassword) {
        window.location.href = 'document2.html'; // ページ遷移
    } else {
        window.location.href = 'error.html'; // ページ遷移
    }
}

