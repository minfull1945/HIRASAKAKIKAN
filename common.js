
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
        alert('ユーザー名またはパスワードが正しくありません');
    }
}
