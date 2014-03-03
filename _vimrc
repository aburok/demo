let mapleader = ','
let g:mapleader = ','

nmap <leader>w :w!<cr>

set nocompatible
set tabstop=3

imap jj <esc>


source $VIMRUNTIME/vimrc_example.vim
source $VIMRUNTIME/mswin.vim
behave mswin

set diffexpr=MyDiff()
function MyDiff()
  let opt = '-a --binary '
  if &diffopt =~ 'icase' | let opt = opt . '-i ' | endif
  if &diffopt =~ 'iwhite' | let opt = opt . '-b ' | endif
  let arg1 = v:fname_in
  if arg1 =~ ' ' | let arg1 = '"' . arg1 . '"' | endif
  let arg2 = v:fname_new
  if arg2 =~ ' ' | let arg2 = '"' . arg2 . '"' | endif
  let arg3 = v:fname_out
  if arg3 =~ ' ' | let arg3 = '"' . arg3 . '"' | endif
  let eq = ''
  if $VIMRUNTIME =~ ' '
    if &sh =~ '\<cmd'
      let cmd = '""' . $VIMRUNTIME . '\diff"'
      let eq = '"'
    else
      let cmd = substitute($VIMRUNTIME, ' ', '" ', '') . '\diff"'
    endif
  else
    let cmd = $VIMRUNTIME . '\diff'
  endif
  silent execute '!' . cmd . ' ' . opt . arg1 . ' ' . arg2 . ' > ' . arg3 . eq
endfunction

" Searching
set ignorecase

" show matching bracket
set showmatch

" Turns of annoying sounds
set noerrorbells
set novisualbell
set t_vb=
set tm=500


colorscheme desert
set guifont=Consolas:h11
set encoding=utf8

set nobackup " not ~ files
set nowb " ???
set noswapfile " no .swp files :)

set shiftwidth=3 " ???
set number " Show line numbers
set ruler " Show position in file

set ai " Auto indent
set si " Smart indent
set wrap " Wrap lines

" map space in normal mode to Search :)
nnoremap <space> /

map 0 ^

" move a line of text using Alt + [jk]
nmap <M-j> my:m+<cr>`y
nmap <M-k> my:m-2<cr>`y



" helper functions
function! VisualSelection(direction) range
    let l:saved_reg = @"
    execute "normal! vgvy"

    let l:pattern = escape(@", '\\/.*$^~[]')
    let l:pattern = substitute(l:pattern, "\n$", "", "")

    if a:direction == 'b'
        execute "normal ?" . l:pattern . "^M"
    elseif a:direction == 'gv'
        call CmdLine("vimgrep " . '/'. l:pattern . '/' . ' **/*.')
    elseif a:direction == 'replace'
        call CmdLine("%s" . '/'. l:pattern . '/')
    elseif a:direction == 'f'
        execute "normal /" . l:pattern . "^M"
    endif

    let @/ = l:pattern
    let @" = l:saved_reg
endfunction


vnoremap <silent> * :call VisualSelection('f')<CR>
vnoremap <silent> # :call VisualSelection('b')<CR>

map <leader>ss :setlocal spell!<CR>

map <leader>sn ]s
map <leader>sp [s
map <leader>sa zg
map <leader>s? z=

nmap <C-j> myo<esc>`y
nmap <C-k> myO<esc>`y

imap <C-Space> <C-n>
