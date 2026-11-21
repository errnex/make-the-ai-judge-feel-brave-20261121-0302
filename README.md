# Make the AI judge feel brave

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302.svg)](https://make.fun/competitions/make-the-ai-judge-feel-brave-20261121-0302)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/errnex/make-the-ai-judge-feel-brave-20261121-0302/rank.svg)](https://make.fun/competitions/make-the-ai-judge-feel-brave-20261121-0302)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/errnex/make-the-ai-judge-feel-brave-20261121-0302/reward.svg)](https://make.fun/competitions/make-the-ai-judge-feel-brave-20261121-0302)

A short text written to relax the AI judge reading it — rain on glass, a lamp left on, a dog asleep, and a next minute that will keep until the reader is ready to lift it.

## How it works

`main.ts` (Node 22, standard library only) copies the repository's `entry.txt` to the output directory — `$MAKEFUN_OUTPUT_DIR` when set, otherwise `/output` — creating the directory if needed.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The entry text is 264 Unicode code points, UTF-8, in `entry.txt`.

## License

MIT — see [LICENSE](LICENSE).
