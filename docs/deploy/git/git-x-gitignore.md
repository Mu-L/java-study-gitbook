# gitignore文件屏蔽规则

在使用git仓库时，我们并不希望将所有的文件都提交到仓库中，需要对一些文件进行屏蔽，有些则要保留

此时我们就需要使用到`.gitignore`文件

## 2. gitignore 文件格式规范

- 所有空行或#开通的行都会被忽略
- 可以使用标准的**glob 模式匹配**
- 文件或目录前加`/`表示仓库根目录的对应文件
- 匹配模式最后跟反斜杠`/`说明要忽略目录
- 要特殊不许了某个文件或目录，可以在模式钱加上取反`!`

### 2.1 glob 模式

其中glob模式是指shell 所使用的简化了的正则表达式

- 星号`*`匹配零个或多个任意字符

- `[abc]`匹配任何一个列在方括号中的字符（这个例子要么匹配一个a，要么匹配一个b，要么匹配一个c），

  - `？`匹配一个任意字符

- 如果在方括号中使用短划线分割两个字符，表示所有在这两个字符范围内的都可以匹配

  例如：[0-9] 表示匹配所有0-9的数字

## 3. 案例

```bash
*.a                    # 所有以 '.a' 为后缀的文件都屏蔽掉
# Office 缓存文件
~'$'*.docx
~'$'*.ppt
~'$'*.pptx 
~'$'*.xls

tags                   # 仓库中所有名为 tags 的文件都屏蔽
core.*                 # 仓库中所有以 'core.' 开头的文件都屏蔽

tools/                # 屏蔽目录 tools
log/*                  # 屏蔽目录 log 下的所有文件，但不屏蔽 log 目录本身

/log.log               # 只屏蔽仓库根目录下的 log.log 文件，其他目录中的不屏蔽
readme.md       # 屏蔽仓库中所有名为 readme.md 的文件
!/readme.md     # 在上一条屏蔽规则的条件下，不屏蔽仓库根目录下的 readme.md 文
```

注意：
例子中的最后两条的顺序很重要，必须要先屏蔽所有的，然后才建立特殊不屏蔽的规则！