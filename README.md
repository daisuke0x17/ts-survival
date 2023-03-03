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

