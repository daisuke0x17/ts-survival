- [TS の特徴](#ts-の特徴)
- [TS の誕生](#ts-の誕生)
- [パッケージマネージャー](#パッケージマネージャー)
- [モジュールバンドラー](#モジュールバンドラー)
- [トランスパイラー](#トランスパイラー)
- [Gitフック](#gitフック)
- [古いJS環境を対象とした開発シーンでも最新の構文が使える](#古いjs環境を対象とした開発シーンでも最新の構文が使える)
- [静的型付け](#静的型付け)
- [JavaScriptとECMAScriptの関係](#javascriptとecmascriptの関係)
- [ECMAScript とブラウザの仕様](#ecmascript-とブラウザの仕様)
- [ECMAScript とブラウザの関係性](#ecmascript-とブラウザの関係性)

## TS の特徴
- TypeScriptで書かれたコードは純粋なJavaScriptにコンパイルされる
- 型推論がある
- オープンソース

## TS の誕生
- JavaScriptの文法を拡張するに留める「JavaScriptのスーパーセット言語」としての戦略を採用
- TypeScriptを導入したとしても、既存のJavaScript資産はそのまま活用

## パッケージマネージャー
- npmやYarnでインストールされるライブラリは、npmjs.comにホスティング
- npmjs.comは中央集権型のレジストリ

## モジュールバンドラー
- 複数のJavaScriptファイルをひとつのファイルに結合するためのツール
- 複数のJavaScriptファイルに依存関係がある場合、それをそのままブラウザに読み込ませるには、慎重に読み込み順を指定しないと、アプリケーションが破壊数
- 多くのファイルからなるアプリケーションをモジュールバンドラーで1ファイルに

## トランスパイラー
- あるプログラミング言語でかかれたコードを、別の言語に変換するツール
- JavaScriptでは、新しいバージョンのJavaScriptから古いバージョンのJavaScriptに変換するトランスパイラーがある
  - Babelやswc
- TypeScriptのtsc(TypeScript compiler)もトランスパイラー
  - tscはTypeScriptからJavaScriptへの変換

## Gitフック
- Gitにコミットするタイミングや、プッシュするタイミングに、何らかのプログラムを実行する機能
- JavaScriptの開発現場では、Gitコミット時に
  - TypeScriptのコンパイルで型チェック
  - リンターのチェックを起動
  - コードフォーマッターでコード整形
- Gitフックを手軽に利用できるようにするツール
  - husky
  - lint-staged

## 古いJS環境を対象とした開発シーンでも最新の構文が使える
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

## JavaScriptとECMAScriptの関係
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

## ECMAScript とブラウザの仕様
- ECMAScriptが決めるクライアントサイドJavaScriptの仕様は部分的
  - ECMAScriptが定める範囲は、言語の文法、構文の解釈方法、コアのAPIなど言語の中核部分
- JavaScriptのうちブラウザ仕様に関する部分は、HTML Living Standardが決める
- JavaScriptの機能の中でも、ECMAScriptとHTML Living Standardで役割分担があるものがある
  - ECMAScriptはモジュールの仕様を定める
    - importやexportの構文や、モジュール内部の仕様など
  - 一方、モジュールの具体的なロード方法はHTML Living Standardが定める

## ECMAScript とブラウザの関係性
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
