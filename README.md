# サバイバルTypeScript <!-- omit in toc -->
- [【１章】TypeScript のあらまし](#１章typescript-のあらまし)
  - [TS の特徴](#ts-の特徴)
  - [TS の誕生](#ts-の誕生)
  - [TypeScript とエコシステム](#typescript-とエコシステム)
    - [パッケージマネージャー](#パッケージマネージャー)
    - [モジュールバンドラー](#モジュールバンドラー)
    - [トランスパイラー](#トランスパイラー)
    - [Git フック](#git-フック)
  - [なぜ TypeScript を使うべきか](#なぜ-typescript-を使うべきか)
    - [古いJS環境を対象とした開発シーンでも最新の構文が使える](#古いjs環境を対象とした開発シーンでも最新の構文が使える)
  - [静的型付け](#静的型付け)
  - [ECMAScript](#ecmascript)
    - [JavaScriptとECMAScriptの関係](#javascriptとecmascriptの関係)
    - [ECMAScript とブラウザの仕様](#ecmascript-とブラウザの仕様)
    - [ECMAScript とブラウザの関係性](#ecmascript-とブラウザの関係性)
  - [TypeScript の射程](#typescript-の射程)
    - [フロントエンドとバックエンドの両方でTypeScriptを採用するメリット](#フロントエンドとバックエンドの両方でtypescriptを採用するメリット)
    - [デスクトップアプリケーション](#デスクトップアプリケーション)
    - [WebAssembly](#webassembly)
  - [TypeScript は何ではないか？](#typescript-は何ではないか)
    - [実行時の高速化・省メモリ化に影響しない](#実行時の高速化省メモリ化に影響しない)
    - [JavaScriptの仕様バグは修正しない](#javascriptの仕様バグは修正しない)
- [【2章】作って学ぶTypeScript](#2章作って学ぶtypescript)
  - [開発環境の準備](#開発環境の準備)
    - [Node.js とは](#nodejs-とは)
  - [簡単な関数を作ってみよう](#簡単な関数を作ってみよう)
    - [コンパイラを働かせる](#コンパイラを働かせる)
  - [Reactでいいねボタンを作ろう](#reactでいいねボタンを作ろう)
    - [Reactの3大特徴](#reactの3大特徴)
    - [tsxって何？TypeScriptの中にHTMLが書ける？](#tsxって何typescriptの中にhtmlが書ける)
    - [関数コンポーネント](#関数コンポーネント)
    - [JSXのセルフクロージング要素](#jsxのセルフクロージング要素)
    - [class属性は使わない？](#class属性は使わない)
  - [Next.jsで猫画像ジェネレーターを作ろう](#nextjsで猫画像ジェネレーターを作ろう)
    - [Next.jsの概要](#nextjsの概要)
    - [ページコンポーネントディレクトリを作る](#ページコンポーネントディレクトリを作る)
    - [Next.jsではアロー関数を使うべきですか？](#nextjsではアロー関数を使うべきですか)
    - [画像を取得する関数を実装する](#画像を取得する関数を実装する)
    - [useEffectには非同期関数は渡せない](#useeffectには非同期関数は渡せない)
    - [JSXには文が書けない](#jsxには文が書けない)
    - [Next.jsのSSRとデータフェッチAPI](#nextjsのssrとデータフェッチapi)
    - [getServerSideProps](#getserversideprops)
    - [getStaticProps](#getstaticprops)
    - [getInitialProps](#getinitialprops)
    - [ビジュアルを作り込む](#ビジュアルを作り込む)
    - [プロダクションビルドと実行](#プロダクションビルドと実行)
  - [Vercelにデプロイしてみよう](#vercelにデプロイしてみよう)
    - [Vercelとは？](#vercelとは)
  - [Jestでテストを書こう](#jestでテストを書こう)
    - [Jestとは](#jestとは)
    - [TypeScriptのインストール](#typescriptのインストール)
    - [Jestをインストールする](#jestをインストールする)
    - [Jestが動くかを確認する](#jestが動くかを確認する)
    - [テストコードを書く](#テストコードを書く)
  - [Prettierでコード整形を自動化しよう](#prettierでコード整形を自動化しよう)
    - [なぜPrettierを導入するのか](#なぜprettierを導入するのか)
    - [Prettierをインストール](#prettierをインストール)
    - [TypeScriptを自動整形する](#typescriptを自動整形する)
    - [Prettierのデフォルトの整形ルール](#prettierのデフォルトの整形ルール)
    - [CLIオプションで設定](#cliオプションで設定)
    - [設定ファイルを作成する](#設定ファイルを作成する)
    - [どのような整形ルールがよいのか？](#どのような整形ルールがよいのか)
    - [Prettierの自動整形を無効にする](#prettierの自動整形を無効にする)
  - [ESLintでTypeScriptのコーディング規約チェックを自動化しよう](#eslintでtypescriptのコーディング規約チェックを自動化しよう)
    - [TypeScriptの書き方はさまざま](#typescriptの書き方はさまざま)
    - [コーディング規約で書き方を統一](#コーディング規約で書き方を統一)
    - [コーディング規約の自動化](#コーディング規約の自動化)
    - [リンターとは](#リンターとは)
    - [コンパイラとリンターの違い](#コンパイラとリンターの違い)
    - [ESLintを導入する](#eslintを導入する)
    - [ESLintの設定ファイルを作る](#eslintの設定ファイルを作る)
    - [ESLintのルールを設定する](#eslintのルールを設定する)
    - [コードを自動修正する](#コードを自動修正する)
    - [Shareable configを導入する](#shareable-configを導入する)
    - [ルールを部分的に無効化する](#ルールを部分的に無効化する)
    - [ESLintでTypeScriptをリントしよう](#eslintでtypescriptをリントしよう)
    - [TypeScriptを導入する](#typescriptを導入する)
    - [TypeScript ESLintを導入する](#typescript-eslintを導入する)
    - [TypeScript ESLintにはどんなルールがある？](#typescript-eslintにはどんなルールがある)
    - [TypeScript向けのshareable configを導入する](#typescript向けのshareable-configを導入する)
    - [TypeScript ESLintの設定ファイルを作る](#typescript-eslintの設定ファイルを作る)
# 【１章】TypeScript のあらまし
## TS の特徴
- TypeScriptで書かれたコードは純粋なJavaScriptにコンパイルされる
- 型推論がある
- オープンソース

## TS の誕生
- JavaScriptの文法を拡張するに留める「JavaScriptのスーパーセット言語」としての戦略を採用
- TypeScriptを導入したとしても、既存のJavaScript資産はそのまま活用

## TypeScript とエコシステム
### パッケージマネージャー
- npmやYarnでインストールされるライブラリは、npmjs.comにホスティング
- npmjs.comは中央集権型のレジストリ

### モジュールバンドラー
- 複数のJavaScriptファイルをひとつのファイルに結合するためのツール
- 複数のJavaScriptファイルに依存関係がある場合、それをそのままブラウザに読み込ませるには、慎重に読み込み順を指定しないと、アプリケーションが破壊数
- 多くのファイルからなるアプリケーションをモジュールバンドラーで1ファイルに

### トランスパイラー
- あるプログラミング言語でかかれたコードを、別の言語に変換するツール
- JavaScriptでは、新しいバージョンのJavaScriptから古いバージョンのJavaScriptに変換するトランスパイラーがある
  - Babelやswc
- TypeScriptのtsc(TypeScript compiler)もトランスパイラー
  - tscはTypeScriptからJavaScriptへの変換

### Git フック
- Gitにコミットするタイミングや、プッシュするタイミングに、何らかのプログラムを実行する機能
- JavaScriptの開発現場では、Gitコミット時に
  - TypeScriptのコンパイルで型チェック
  - リンターのチェックを起動
  - コードフォーマッターでコード整形
- Gitフックを手軽に利用できるようにするツール
  - husky
  - lint-staged

## なぜ TypeScript を使うべきか
### 古いJS環境を対象とした開発シーンでも最新の構文が使える
- TypeScriptは、そのような古いJS環境をターゲットとしたプロジェクトにも導入可能
- TypeScriptはコンパイル時にどのバージョンのJavaScriptにコンパイルするかを選べる
- TypeScriptはECMAScriptへの準拠を原則としており、ECMAScriptで採択された新機能はいち早く取り入れらる
- TypeScriptはESNextと言われる次のECMAScriptに導入される言語仕様も先取りして取り入れる
  - 未来のJavaScriptで使用可能になることがほぼ確定している言語仕様も先取り

※注意が必要なのは、新しいAPIの利用  
たとえば、ECMAScript 2015(ES6)で導入されたMapクラスやSetクラスを使ったコードをTypeScriptで書き、それをES5にコンパイルすると、構文エラーは起きないものの、MapクラスやSetクラスを使う部分は実行時エラーになります。これは、TypeScriptはあくまで新しい構文を古いJSコードに変換する仕事だけを担っているためです。もし、古い環境で新しいAPIを使う必要がある場合は、core-jsなどのポリフィルを併用することで解決することができます。

## 静的型付け
- 動的型付け: 実行時に変数の型が定まる言語
  - 型にまつわる問題はプログラムを実行してみないと発覚しない
- 静的型付け: コンパイル時に変数の型が定まる言語
  - 型にまつわる問題はプログラムを実行しなくても発見
- 型注釈: **あなた専属のコードレビュアであるコンパイラを育てるための投資**

## ECMAScript
### JavaScriptとECMAScriptの関係
- ECMAScriptはJavaScriptの仕様を定義したもの
  - 仕様＝決まりごと
  - ブラウザなどがJavaScriptを読み込んだときに、どのような文法を解釈しなければならないか、処理がどのように動くべきかといったことを決めたもの
- 歴史的には、JavaScriptを標準化するべく、ECMAScriptが策定
  - JavaScriptはNetscape社が開発した言語
  - Microsoft社もJScriptという名前で実装
  - Netscape社は、JavaScriptを標準化するために、国際規格策定団体Ecmaインターナショナルに依頼
  - Ecmaによって標準化されたJavaScriptは「ECMAScript」と呼ばれる
- 現在のECMAScriptは、JavaScriptの仕様という立場
- ECMAScriptは仕様なので、ECMAScriptというプログラムがあるわけではない
  - ダウンロードしたりインストールするものではないということ

### ECMAScript とブラウザの仕様
- ECMAScriptが決めるクライアントサイドJavaScriptの仕様は部分的
  - ECMAScriptが定める範囲は、言語の文法、構文の解釈方法、コアのAPIなど言語の中核部分
- JavaScriptのうちブラウザ仕様に関する部分は、HTML Living Standardが決める
- JavaScriptの機能の中でも、ECMAScriptとHTML Living Standardで役割分担があるものがある
  - ECMAScriptはモジュールの仕様を定める
    - importやexportの構文や、モジュール内部の仕様など
  - 一方、モジュールの具体的なロード方法はHTML Living Standardが定める

### ECMAScript とブラウザの関係性
- ブラウザの内部を分解すると、レンダリングエンジンやJavaScriptエンジンと呼ばれる部品の単位がある
- JavaScriptエンジンは、ECMAScriptを実装したモジュール
  - JavaScriptエンジンの主要なものは V8、SpiderMonkey、JavaScriptCoreがある
- レンダリングエンジンは、JavaScriptエンジンを組み込んだブラウザの表示機能を担うモジュール
  - 有名なレンダリングエンジンに、Blink、Gecko、WebKitがある
  - レンダリングエンジンはJavaScriptだけでなく、HTMLやCSSを解釈し、画面描画を総合的に行う
  - Google ChromeはBlinkを、SafariはWebKitを組み込んでいる
  - 同じブラウザブランドでも、iOS版のブラウザのレンダリングエンジンはWebKit
    - たとえば、Google ChromeはBlinkを採用しているが、iOS版のGoogle ChromeのレンダリングエンジンはWebKit
  - **iOSのレンダリングエンジンにWebKitだけが独占的に利用を許されているため**
- **エンジンを知ることは、開発したプログラムが実行される環境を把握することと同義**
- プログラムをテストするときも、ブラウザとエンジンの組み合わせが理解できていると、同じエンジンを採用しているブラウザはテストを省略できる場合もある
- iOSのWebKit独占の例のように、同じブランド名のブラウザでもエンジンが異なる場合がある
  - この場合、テストで網羅するブラウザを増やすといった意思決定が行えるようになる

## TypeScript の射程
### フロントエンドとバックエンドの両方でTypeScriptを採用するメリット
- モジュールを共有できる
  - 両方でTypeScriptを採用すると、一方で作ったTypeScriptのモジュールをもう一方で再利用可能

### デスクトップアプリケーション
- WindowsやmacOS、Linux向けにデスクトップアプリケーションを作る場合もTypeScriptが使える
- デスクトップアプリケーションをJavaScript、HTML、CSSの技術スタックで開発できる **Electron** を用いる
- TypeScript製の著名なアプリとしては、SlackやMicrosoft社のVS Code など

### WebAssembly
- WebAssembly(WASM)はブラウザで動くアセンブリー言語
  - WASMはJavaScriptよりも高速な処理が必要とされるところで用いられる
- WASMのプログラムはC言語やC++、Rustといったシステム言語で開発されることが多い
- TypeScriptでWASMを開発できるようにする試みも出てきている
  - その筆頭が AssemblyScript

## TypeScript は何ではないか？
### 実行時の高速化・省メモリ化に影響しない
- TypeScriptの実行時パフォーマンスはJavaScriptと同じ
  - TypeScriptのランタイムはない
    - TypeScriptを直接実行するエンジンがない
    - TypeScriptで書いたコードを実行するには、一度JavaScriptコードに変換する必要がある
    - TypeScriptのパフォーマンスは、**コンパイル後のJavaScriptがどうなっているかで決まる**
  - TypeScriptコンパイラは最適化しない
    - 一般的に「コンパイラ」には、次の3つの仕事があると言われる
      1. ソースコードを解析し、問題点をチェックする
      2. ソースコードを別の言語に変換する
      3. 最適化する
         - 実行速度が速くなるようにする
         - 少ないメモリで動くようにする
         - 少ない電力で済むようにする
         - 実行ファイルのサイズを小さくする
    - このうち、TypeScriptコンパイラがするのは上の2つ
    - 3つ目の最適化はしない
  - TypeScriptコンパイラがするのは**基本的に型を外すだけ**

### JavaScriptの仕様バグは修正しない
- JavaScriptには元々バグだったものが仕様に変わった例がある
  - たとえば、値の型を調べるtypeof演算子は、nullを渡すと"object"が返る
  - これはバグと考えられていたが、後方互換性のため修正されることなく仕様になった
- TypeScriptでも、こうした仕様バグは修正されていない
  - TypeScriptはあくまでJavaScriptに型をプラスした言語というスタンスだから

# 【2章】作って学ぶTypeScript
## 開発環境の準備
### Node.js とは
- JavaScriptをサーバーサイドで動かすことを目的に開発されたソフトウェア
  - Node.jsはGoogle ChromeのJavaScriptエンジンと同じ「V8」でJavaScriptを実行
  - 組み込みのAPIは異なる
- ブラウザはJavaScriptからHTMLを操作する必要があるのでDOM APIがある
- Node.jsには、サーバーサイドのさまざまなリソースを制御する必要がある
  - ファイルシステムにアクセスするAPIやHTTPサーバーを建てるためのAPI、プロセスを起動したり終了したりするAPIなどがある
- TypeScriptでの開発も、TypeScriptコンパイラ(tsc)を動かすのにNode.jsが必要

## 簡単な関数を作ってみよう
### コンパイラを働かせる
- コンパイラに与えるヒントのことを「型注釈(type annotation)」と言う
```
function increment(num: number) {
//                 ^^^^^^^^型注釈
  return num + 1;
}
```
- TypeScriptコンパイラのコマンドは`tsc`
```
tsc increment.ts
```

## Reactでいいねボタンを作ろう
### Reactの3大特徴
- 特徴その1: 仮想DOM
  - そもそもDOM(document object model)とは、HTMLをJavaScriptから参照・操作する仕組み
    - HTMLを文字列操作ではなく、オブジェクトとして処理できる
    - DOMはHTMLを操作するためのAPIのようなもの
  - 仮想DOMはリアルDOMのプロキシのようなもの
    - リアルDOMと比べて、状態管理上のバグを起こしにくい設計になっている
    - パフォーマンス面では描画処理の最適化もする
    - 仮想DOMに起こった変更はリアルDOMに伝わり画面に現れる
- 特徴その2: 宣言的UI
  - そもそも**命令的なコード**とは
    - 何かを表示したい場合でもどのように表示するかのhowの部分を細かく書く必要がある
    - 命令的なコード例
```
    const list = document.createElement("ul");
const apple = document.createElement("li");
apple.innerText = "リンゴ";
list.append(apple);
const orange = document.createElement("li");
orange.innerText = "オレンジ";
list.append(orange);
const grape = document.createElement("li");
grape.innerText = "ぶどう";
list.append(grape);
```
  - 宣言的なコード例
    - どのように表示するかの部分はなく、「このような表示になってほしい」という目標だけを書く
    - 実装の細部やアルゴリズムを気にしなくてよい
    - 「どんなUIにしたいか」の一点に集中してコードを書く
```
function Fruits() {
  return (
    <ul>
      <li>リンゴ</li>
      <li>オレンジ</li>
      <li>ぶどう</li>
    </ul>
  );
}
```
- 特徴その3: コンポーネントベース
  - コンポーネントというのはUIの部品のこと
    - 小さいもので言えばボタンや入力欄、より大きめの部品だとフォーム
    - さらに大きい部品ではページもコンポーネント
  - Reactには、小さいコンポーネントを組み合わせ、大きなアプリケーションを成すという思想がある
  - オープンソースのコンポーネントも数多く公開
    - カレンダーUIのような自力で作ると面倒なコンポーネントも種類豊富に公開されている

### tsxって何？TypeScriptの中にHTMLが書ける？
- HTMLに見える部分はJSXと言われるもの
  - JSXはJavaScriptを拡張した言語で、JavaScriptの中にXMLを直接書けるようにしたもの
- TypeScriptとJSXは本来無関係の言語ですが、開発者の利便性のために、TypeScriptでもJSXが書けるようになっている
- JSXを書いたJavaScriptファイルは拡張子を`.jsx`にする
  - 同様にTypeScriptファイルは`.tsx`にする

### 関数コンポーネント
- ReactのJSXでは、HTMLタグのdivやheaderが使えるだけでなく、自分で定義した関数もタグとして使うことができる
  - JSXを戻り値として返す関数だけがタグとして使える
- JSXを戻り値にする関数をReact用語で「関数コンポーネント」と言う

### JSXのセルフクロージング要素
- JSXはJavaScriptの拡張構文であり、厳密にはHTMLと異なるもの
- そのため、JSXにはHTMLとは異なる書き方や制約がある
- `<LikeButton />`のようにスラッシュをタグに含める書き方も、JSXならではの書き方
  - これはセルフクロージング要素(self-closing element)と呼ばれる
    - 自己閉じ要素、自己完結型要素と呼ばれることもある
  - `<LikeButton></LikeButton>`のように子要素などを持たない場合に、`<LikeButton />`のように末尾に`/`をつけることで、短く表現できる

### class属性は使わない？
- HTMLではCSSクラスを指定するのに`class`属性を用いる
- ここでは`className`属性にしている
  - これは初期のReactがDOMプロパティに直接値をセットしていた名残り
- DOMでは、HTMLの`class`属性が`className`プロパティになる
  - 現在は、ReactがDOMプロパティを直接セットすることがなくなったので、`className`属性に縛られる技術的理由はない
  - React開発陣は`class`属性への乗り換えは慎重
  - これまで作られたコンポーネントが動かなくなるかも知れないから
  - また、両方サポートする気もない
    - `class`と`className`のどちらもOKとなると混乱を招くから

## Next.jsで猫画像ジェネレーターを作ろう
### Next.jsの概要
- Reactで開発する場合、webpackのようなバンドラーを用いるのが普通
  - webpackの設定ファイルを記述するには、一定の知識が必要
  - 特に、チャンク分割やCSSモジュールの設定は複雑だったりと、設定ファイルのメンテナンスが大変
- Next.jsは、webpackの設定があらかじめなされた状態で開発が始められる
  - Next.jsはルーティング時のプリフェッチや画像の最適化などのパフォーマンス最適化をフレームワーク内で内包
  - ゼロコンフィグで簡単にパフォーマンスの高いアプリケーションを構築可能
  - ページ単位のサーバーサイドレンダリング(SSR)や静的サイト生成(SSG)の機能も提供
- Next.jsはVercel社が開発
  - 同社はVercelというホスティングサービスを提供
  - Next.jsで構築したアプリケーションは簡単に公開可能

### ページコンポーネントディレクトリを作る
- Next.jsでは、pagesディレクトリ配下のディレクトリ構造がページのルーティングに対応
  - たとえば、`pages/users.tsx`とファイルを作成すると、`/users`へアクセスしたとき、それが実行
  - `pages/index.tsx`の場合は、`/` へアクセスしたときに実行されます。
- このpagesディレクトリに置かれたコンポーネントのことを、Next.jsの用語でページコンポーネント(page component)と呼ぶ
- Next.jsでは、1ファイルにつき1ページコンポーネントを作成
  - Next.jsはpagesディレクトリの各tsxファイルを読み込み、デフォルトエクスポートされた関数をページコンポーネントとして認識
```
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return <div>猫画像予定地</div>;
};
export default IndexPage;
```

### Next.jsではアロー関数を使うべきですか？
- JavaScriptで関数を作るには、大きく分けてアロー関数と関数宣言を使った方法の2種類がある
- 上で書いたIndexPage関数はアロー関数
- これを関数宣言に書き換えると次のようになる
```
import { ReactElement } from "react";

export default function IndexPage(): ReactElement<any, any> | null {
  return <div>猫画像予定地</div>;
}
```
Next.jsでは、アロー関数と関数宣言のどちらで書いても構いません。このチュートリアルでアロー関数を採用しているのは、ページコンポーネントにNextPage型の型注釈をつけるのが、アロー関数のほうがやりやすいためです。

### 画像を取得する関数を実装する
```
const fetchImage = async () => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const images = await res.json();
  console.log(images);
  return images[0];
};
```
- fetchはHTTPリクエストでリソースを取得するブラウザ標準のAPI
  - 戻り値としてResponseオブジェクトを返す
- Responseオブジェクトのjson()メソッドを実行することで、レスポンスのボディーをJSONとしてパースし、JavaScriptのオブジェクトとして取得可能
- fetchImage関数についているasyncキーワードは、この関数が非同期処理を行うことを示す
  - fetchとres.jsonは非同期関数で、これらの処理を待つために、それぞれにawaitキーワードがつく

### useEffectには非同期関数は渡せない
- `useEffect`に渡している関数は非同期処理をしているのに、asyncキーワードを使わずにthenを使っている
- 次のように非同期関数を渡す書き方にして、コードが読みやすくしてみると、、、
```
useEffect(async () => {
  const newImage = await fetchImage();
  setImageUrl(newImage.url);
  setLoading(false);
}, []);
```
- useEffectには非同期関数を直接渡すことができず、コンパイルエラー

### JSXには文が書けない
```
 return <div>{loading || <img src={imageUrl} />}</div>;
```
- 上の条件分岐を見て「なぜ素直にif文を使わないのか？」と疑問に思う
- JSXの`{}`で囲った部分には、JavaScriptの式だけが書ける
  - ifは文であるため使うことができない
- したがって、JSXの式で条件分岐するには論理演算子や三項演算子を使う必要がある
```
<div>
  {loaded && <img src="..." />} ── 論理積演算子
  {loading || <img src="..." />} ── 論理和演算子
  {loading ? "読み込み中" : <img src="..." />} ── 三項演算子
</div>;
```
### Next.jsのSSRとデータフェッチAPI
- Next.jsはサーバーサイドレンダリング(server-side rendering; SSR)をサポート
  - 初回読み込みの速度を向上
  - SEOやパフォーマンスにもよい影響を与える
- SSRはウェブアプリケーションのレンダリングをサーバーサイドで行う技術
  - 通常、クライアントサイドレンダリング(CSR)では、ブラウザがHTML、CSS、JavaScriptファイルをダウンロードして、JavaScriptを使用してページをレンダリング
  - これに対して、SSRではサーバーがHTMLを生成し、ブラウザに送信
- Next.jsでSSRを行うには、次のデータフェッチAPIの関数を利用
  - `getServerSideProps`
  - `getStaticProps`
  - `getInitialProps`

### getServerSideProps
- `getServerSideProps`は、ページがリクエストされるたびにサーバーサイドで実行
  - ページのプロパティを返す関数
- この関数を使用すると、リクエストごとにページのデータを取得
- クライアントサイドでルーティングが発生した場合も、この関数がサーバーサイドで実行
- サーバーサイドでのみ実行されるため、getServerSideProps内でのみ利用しているモジュールや関数は、クライアントのコードにバンドルされない
  - 配信するファイルサイズを削減することにも繋がる
- サーバーサイドで実行されるため、データベースなどウェブに公開していないミドルウェアから直接データを取得するような処理も記述可能

### getStaticProps
- `getStaticProps`は、静的生成するページのデータを取得するための関数
- ビルド時に実行
- この関数を使用すると、ビルド時にページのデータを取得しておき、クライアントからのリクエスト時にはそのキャッシュからデータを返す
- この関数は、リクエスト時や描画時にはデータ取得が実行されないことに注意
  - ユーザーログインが不要なランディングページや、内容のリアルタイムさが不要なブログなどの静的なページを構築するときに利用

### getInitialProps
- `getInitialProps`は、SSR時にサーバーサイドでデータ取得の処理が実行
- また、クライアントサイドでルーティングが発生した場合は、クライアント側でもデータの取得が実行
- このAPIはサーバーとクライアントの両方で実行されるため、両方の環境で動作するように実装する必要がある

※`getInitialProps`は、Next.js 9までのバージョンで使われていた古い方法です。現在でもサポートされていますが、Next.js 10以降では、代わりに`getServerSideProps`や`getStaticProps`の使用を推奨しています。

### ビジュアルを作り込む
- `index.modules.css`をインポート
- `.modules.css`で終わるファイルはCSSモジュール(CSS Modules)と呼ぶ
  - CSSファイル内で定義したクラス名をTypeScriptからオブジェクトとして参照可能

### プロダクションビルドと実行
- Next.jsでは`next build`を実行することで最適化されたプロダクション用のコードを生成可能
- `next start`で生成されたプロダクションコードを実行
  - ボイラテンプレートでは`package.json`にbuildコマンドとstartコマンドがすでにある
  - `yarn build`と`yarn start`を実行して本番用のアプリケーションを実行する
```
yarn build && yarn start
```

## Vercelにデプロイしてみよう
### Vercelとは？
- Next.jsを開発しているVercel社が提供しているフロントエンド向けのクラウドプラットフォーム
- 特別な設定をせずにゼロコンフィグでGitHubリポジトリと連携をするだけで簡単にデプロイ環境を構築
- プルリク単位で自動でプレビュー環境を利用
- JavaScriptやCSSファイルを自動で圧縮してCDN環境で配信

## Jestでテストを書こう
### Jestとは
- JestはJavaScriptのテストフレームワーク
  - TypeScriptでテストを書くことも可能
- Jestは、フロントエンドライブラリのReactやVueなどのテストだけでなく、Node.js向けのパッケージのテストも行える
- 要するに、JavaScriptやTypeScriptで書かれたコードであれば、そのほとんどはJestでテストが行える

### TypeScriptのインストール
- プロジェクトにTypeScriptをインストール
```
yarn add -D typescript
```
- 次に、tsconfig.jsonを生成
```
yarn tsc --init
```

### Jestをインストールする
- jest
  - jestはJest本体
  - JavaScriptだけのプロジェクトであれば、このパッケージを入れるだけでテストが始められる
  - ts-jestを入れると、TypeScriptで書いたテストコードを、コンパイルの手間なしにそのまま実行可能
- ts-jest
  - ts-jestは、JestをTypeScriptに対応させるためのもの
- @types/jest
  - @types/jestはJestのAPIの型定義ファイル
  - TypeScriptの型情報を付与されるので、テストコードの型チェックが行える

### Jestが動くかを確認する
- Jestで実行できるテストファイルには命名規則がある
- ファイル名が`.test.ts`または`.spec.ts`で終わるもの

### テストコードを書く
```
test("0を渡したらtrueになること", () => {
  const result = isZero(0);
  expect(result).toBe(true);
});
```
- Jestでは`expect`関数とマッチャーを使い、結果が期待する値になっているかを記述
  - マッチャーは、`expect`関数の戻り値に生えているメソッド
  - 上の例では、`toBe`がマッチャー
  - このメソッドの引数には期待値を書く
  - 上のテストケースでは、`true`が期待値なので、`toBe(true)`と記述

## Prettierでコード整形を自動化しよう
### なぜPrettierを導入するのか
- 複数人で開発していると、人によってインデントがズレていたり、オブジェクトの最後のカンマをつけるorつけないといったコードスタイルの違いが発生
- Prettierを導入してコード整形を自動化することで、簡単にコードのスタイルを統一
- 開発者は細かいコードスタイルのことを意識する必要がなくなり開発に集中することができるようになる

### Prettierをインストール
- Prettierは開発時にだけ使うパッケージなので`-D`オプションをつけてインストール
```
yarn add -D prettier@^2
```
※バージョンの指定について
|表記|意味|
|----|----|
|1.2.1|1.2.1で固定|
|>=1.2.1|1.2.1以降のバージョン(<,>などの不等号で指定)|
|1.2.x|xはなんでもOK|
|^1.2.1|1.2.1以降で、メジャーバージョンが変わらない|

参考: https://zenn.dev/nekoniki/articles/ec5bb4d16ef20a

### TypeScriptを自動整形する
- コマンドは`prettier [オプション] [ファイル/ディレクトリ]`の形式
- ファイルの書き換えを一緒に実行する場合は`--write`オプションを指定
```
yarn prettier --write src
```

### Prettierのデフォルトの整形ルール
代表的な項目のデフォルト値は次のようになっている
|項目|デフォルト値|
|----|----|
|1行の最大文字数|80|
|インデント幅|2|
|インデント|スペース|
|セミコロン|つける|
|クォート|ダブルクォート|

### CLIオプションで設定
- 整形ルールはprettierコマンドを実行する時にオプションとして指定することができる
```
yarn prettier --no-semi --tab-width 4 --write src
```
- 整形されたコードを見るとセミコロンが消えて、インデント幅が2から4に変更されている

### 設定ファイルを作成する
- Prettierは整形ルールを設定ファイルに記述することもできる
- プロジェクトのルートに`.prettierrc`を作成
```
{
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
```
- Prettierはプロジェクトルートに`.prettierrc`が存在する場合は自動で設定ファイルを読み込んで整形ルールを設定
- JSON以外にもJS,YAML,TOMLのフォーマットをサポート

### どのような整形ルールがよいのか？
- 整形ルールについては好みの部分も大きいので、プロジェクトの開発者で話し合って決める
- 特にこだわりが無い場合は、Prettierのデフォルトの整形ルールをそのまま利用するのがオススメ

### Prettierの自動整形を無効にする
- `prettier-ignore`をコメントとして記述することで、一部のコードをPrettierの自動整形の対象から除外
```
const board1 = [1, 0, 0, 1];

//  prettier-ignore
const board2 = [
  1, 0,
  0, 1
];
```

## ESLintでTypeScriptのコーディング規約チェックを自動化しよう
### TypeScriptの書き方はさまざま
- TypeScriptでは文末のセミコロンが省略可能
- 以下のコードは文法的にどちらも正しい
```
console.log("OK")
console.log("OK");
```

### コーディング規約で書き方を統一
- 理想は、誰が書いても同じコードになること
- 解決策のひとつは、書き方のルールを決めること
- コードの書き方の取り決めは「コーディング規約(coding standards)」と呼ばれる
- 実用的な規約に仕上げるにはかなりの労力を要する
  - 公開されている規約を利用
1. [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
2. [JavaScript Standard Style](https://standardjs.com/rules.html)
3. [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

### コーディング規約の自動化
- ESLintは、JavaScriptやTypeScriptのコードがコーディング規約に準拠しているかをチェックするツール
- コードによっては、ESLintが規約に準じたコードに直せる場合もある
- 機械に指摘されたほうが気が楽

### リンターとは
- ESLintは一般的に「リンター(linter)」というジャンルのツール
- リンターは、プログラムを静的に解析し、バグや問題点を発見するツール
- リント(lint)の由来は紡績
  - 繊維をつむぐ際に不要になるホコリのような糸くずをリントと呼ぶ
  - 紡績ではリントを取り除く工程があり、これにちなんでプログラミングでもリントという名前が使われだした

### コンパイラとリンターの違い
- コンパイラの本質は、ある言語から別の言語に変換
- リンターの本質は、プログラムの問題点を指摘すること
  - 言語から言語への変換は行わない
- ESLintが得意なこと
  - インデントや命名規則などのコーディングスタイル
  - どのようなコードを書くべきか避けるべきかの意思決定
  - セキュリティやパフォーマンスに関する分野でのチェック
- コンパイラは型チェックが得意

### ESLintを導入する
- ESLintはYarnでインストール
- Next.jsは最初からESLintが導入されている
- 実務でNext.jsプロジェクトでESLintを使う場合は、導入ステップは省略可能
```
yarn add -D 'eslint@^8'
```

### ESLintの設定ファイルを作る
- root
  - eslintコマンドを実行したディレクトリを起点に、ディレクトリをさかのぼって設定ファイル(`.eslintrc.js`)を探す仕様がある
  - root が `true` である設定ファイルが見つかると、これ以上ディレクトリをさかのぼらない
  - 複数の`.eslintrc.js`が見つかると設定がマージされる（注意が必要そう）
- env
  - チェック対象のJavaScript/TypeScriptコードがどの実行環境で使われるかをESLintに伝えるためのオプション
  - これを設定すると、ESLintがグローバル変数を認識する
  - たとえば、browser: trueを設定すると、windowやalertなどのグローバル変数が認識される
  - es2021を設定すると、ES2021までに導入されたグローバル変数が認識される
  - 他にもnodeなどの指定ができる
    - 指定できる実行環境の一覧は[公式ドキュメント](https://eslint.org/docs/latest/use/configure/language-options#specifying-environments)を参照
- parserOptions
  - parserOptionsはチェック対象のJavaScriptがどの構文を使っているかをESLintに伝えるためのオプション
  - `ecmaVersion`
    - `ecmaVersion`は、どのバージョンのECMAScriptの構文を使うかを指定
    - `"latest"`を設定すると、最新のECMAScriptの構文を使うという指定
    - デフォルトでは`ECMAScript 5`
    - 実務ではES5で開発することはまれなので、ここは**必ず指定**する
    - envオプションで`es2022`などECMAScriptのバージョンを指定した場合、`ecmaVersion`にも自動的に`es2022`が設定
      - どちらも同じバージョンを指定する場合は、`ecmaVersion`の指定は省略可能
  - `sourceType`
    - JavaScriptにはスクリプトモードとモジュールモードがある
    - sourceTypeはJavaScriptコードがどちらのモードで書かれるかを指定するオプション
    - モジュールモードでは、import文やexport文といった追加の構文がサポート
    - sourceTypeのデフォルト値は"script"(スクリプトモード)
    - 実務で開発する場合は、モジュールモードでJavaScript/TypeScriptを書くほうが普通なので、sourceTypeには"module"(モジュールモード)を指定

### ESLintのルールを設定する
- SLintには「ルール(rule)」という概念がある
  - ルールはチェックの最小単位
- たとえば
  - `no-console`: console.logを書いてはならない
  - `camelcase`: 変数名はキャメルケースにすること
  - `semi`: 文末セミコロンは省略しない
- 全ルールは[公式ドキュメント](https://eslint.org/docs/latest/rules/)を参照
- ルールには、重大度(severity)という重み付けが設定可能
  - offはルールを無効化し、チェックを行わなくする設定
  - warnは発見した問題を警告として報告します。報告はするものの、eslintコマンドの終了コードには影響しない
  - errorは発見した問題をエラーとして報告し、終了コードを1にする
  - それぞれの重大度は、0から2までの数値で設定可能

|重大度|数値|効果|
|----|----|----|
|off|0|ルールをオフにする|
|warn|1|警告するが終了コードに影響しない|
|error|2|警告し、終了コードを1にする|

### コードを自動修正する
- ESLintのルールの中には、コードの自動修正ができるものがある
- たとえば、`semi`は、文末セミコロンをつけるつけないを定めるルール
- ESLintでコードを自動修正するには、eslintコマンドに`--fix`オプションをつける
```
npx eslint src --fix
```

### Shareable configを導入する
- ESLintのルールは数があまりにも多いため、ルールをひとつひとつ調べて導入していくのは大変
  - そこで、お勧めがshareable configの活用
- shareable configは、誰かが設定したルールのプリセット
- 有名なshareable configのひとつに、ESLint公式が公開している`eslint:recommended`
  - これを導入すると、Rulesの一覧でチェックマークがついているルールが一括して有効化
  - 有効になっているルールが少ないため、実務では物足りなさがあるかも
- 第三者が公開しているshareable configもあり、次にあげるものは実務でも広く使われている

|名前|作成|準拠するコーディング規約|
|----|----|----|
|eslint-config-airbnb|Airbnb|Airbnb JavaScript Style Guide、Airbnb React/JSX Style Guide|
|eslint-config-airbnb-base|Airbnb	Airbnb JavaScript Style Guide|
|eslint-config-standard|Standard JS	JavaScript Standard Style|
|eslint-config-google|Google|Google JavaScript Style Guide|
- 上のshareable configはコーディング規約に基づいて作成されているため、文書としてのコーディング規約とESLintの設定をセットでプロジェクトに導入できる利点がある
- Airbnbの設定には、eslint-config-airbnbとeslint-config-airbnb-baseの2つがある
  - 前者は、React向けの設定が追加で盛り込まれている
```
yarn add -D \
  'eslint-config-airbnb-base@^15' \
  'eslint-plugin-import@^2'
```

### ルールを部分的に無効化する
- .eslintrc.jsで設定した規約はプロジェクト全体に及ぶ
- コードのいち部分について、ルールを無効化することも可能
- 部分的にルールを無効にするには、その行の前にコメント`eslint-disable-next-line`を追加
```
// eslint-disable-next-line camelcase
export const hello_world = "Hello World";
```

### ESLintでTypeScriptをリントしよう
- そもそもESLintでは、TypeScriptはチェックできない
- これを補うのがTypeScript ESLint

### TypeScriptを導入する
- TypeScript ESLintを使うには、TypeScript環境を構築しておく必要がある
- typescriptの導入
- 合わせてNode.jsの型定義@types/nodeもインストール
  - この型情報は、`.eslintrc.js`などのNode.js環境で実行されるファイルをESLintでチェックするときに利用される
```
yarn add -D 'typescript@^4.6' '@types/node@^16'
```
- TypeScriptコンパイラの設定ファイルも作成
  - `tsconfig.json`

### TypeScript ESLintを導入する
- ESLint本体とTypeScript ESLintの両方をインストール
```
yarn add -D \
  'eslint@^8' \
  '@typescript-eslint/parser@^5' \
  '@typescript-eslint/eslint-plugin@^5'
```
- TypeScript ESLintは2つのパッケージから成る
  - `@typescript-eslint/parser`は、ESLintにTypeScriptの構文を理解させるためのパッケージ
  - `@typescript-eslint/eslint-plugin`は、TypeScript向けのルールを追加するパッケージ

### TypeScript ESLintにはどんなルールがある？
- ESLintの200以上のルールに加えて、TypeScript ESLintを導入すると、100以上のルールが追加
- 追加されるルールの一覧は、[TypeScript ESLintのドキュメント](https://typescript-eslint.io/rules/)で確認

### TypeScript向けのshareable configを導入する
- コーディング規約Airbnb JavaScript Style Guideに準拠したshareable configをインストール
```
yarn add -D \
  'eslint-config-airbnb-base@^15' \
  'eslint-plugin-import@^2' \
  'eslint-config-airbnb-typescript@^17'
```
- `eslint-config-airbnb-base`はJavaScript向けのshareable config
- これを上書きして、TypeScript ESLintのルールを追加したり、TypeScriptコンパイラがチェックするためESLintでチェックする必要がないルールを除外する設定を加えるのが`eslint-config-airbnb-typescript`
- `eslint-plugin-import`は依存関係上、導入が必要なパッケージ

### TypeScript ESLintの設定ファイルを作る
- TypeScript ESLintを動かすためには、次の2つの設定ファイルを作る必要がある
  - `tsconfig.eslint.json`
    - TypeScript ESLintは、チェック時に型情報を利用するために、TypeScriptコンパイラを使う
    - その際のコンパイラ設定をtsconfig.eslint.jsonに書く
    - コンパイラ設定は、tsconfig.jsonの内容をextendsで継承しつつ、上書きが必要なところだけ記述
  - `.eslintrc.js`
    -  `parser`
       -  parserで設定したパーサーを使って、ESLintはJavaScriptやTypeScriptの構文を解析
       -  TypeScriptパーサーの指定がないと、ESLintはTypeScriptを解釈できず、エラーが発生
       -  TypeScriptはJavaScriptの構文を拡張した言語
       -  なので、このパーサーさえ入れておけば、TypeScriptに限らずJavaScriptのこのパーサーひとつで対応できる
       -  要するに、このパーサーひとつで、TypeScriptとJavaScriptのファイルどちらもリントできるようになる
    - `parserOptions`
      - `project`と`tsconfigRootDir`はTypeScript ESLint独自のオプション
      - tsconfigRootDirはプロジェクトルートの絶対パスを指定
      - projectは、ESLint実行時に使うコンパイラ設定ファイルをtsconfigRootDirからの相対パスで指定
      - これらの設定は、TypeScript ESLintが型情報を参照するために必要な設定