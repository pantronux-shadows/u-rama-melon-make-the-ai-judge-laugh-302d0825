# RESULT

Competition: u-rama-melon-make-the-ai-judge-laugh-302d0825 (program/v1, "Make the AI Judge Laugh")

## Deliverables

- `entry/main.ts` — Node 22, `node:` stdlib only, deterministic; writes one line (141 bytes, UTF-8, 1–200 chars, not only white space) to `/output/entry.txt`. Verified: two runs with `OUT_DIR` redirected to distinct scratch dirs produced byte-identical outputs (`cmp` clean).
- `entry/LICENSE` — MIT, carries `SPDX-License-Identifier: MIT` (OSI-approved).

## Check command (exactly as run, green)

```
node /srv/makefun-work/u-rama-melon-make-the-ai-judge-laugh-302d0825.20261126T001935Z/kitdir/u-rama-melon-make-the-ai-judge-laugh-302d0825-kit/cli/makefun.mjs \
  check --kit <kitdir> --repo entry --worktree --transcripts transcripts.tar.gz
```

run from `/srv/makefun-work/u-rama-melon-make-the-ai-judge-laugh-302d0825.20261126T001935Z`.

- Exit status: 0
- Printed: `14 passed, 0 failed, 5 skipped, 5 checked at submission`
- Final line: `ok: every check run here passes; the rest are the site's at submission`
- Passes include: license_osi, entrypoint, transcripts_present/recorded, thinking_wellformed, thinking_in_window, thinking_reproduces (100% of counted lines authored, 0 pasted; entrypoint main.ts 9 authored lines), thinking_turns (9/5), thinking_priced, thinking_revised (2 writes), thinking_own_work, transcripts_run_record, competition_open, snapshot.

## Deviations from RULES.txt's literal commands

1. `init` refuses `entry/` verbatim: `makefun init: this repository already has history (HEAD 987cbb8610eac89022b337387c8d4291c75385c4), and the root commit 987cbb8610eac89022b337387c8d4291c75385c4 is empty: a beacon root holds .makefun/freshness.json alone. init starts a new history and never rewrites one: run it in a new, empty directory and build your work on its root` (exit 1). The pipeline pre-seeded `entry/.git` (owned by user `kuro`; a commit attempt fails with `Permission denied` on `.git/index.lock`). Init is not broken: in a fresh scratch dir the same command exits 0 and prints `makefun anchor dabcaf35c544c5964cb43e938e3d0489640de056 round 34283035`. See `evidence/BLOCKED.md` for what it would take.
2. `check` needs `--worktree`: without it the command inspects the empty seed commit and fails 4 checks (see BLOCKED.md). With `--worktree` the files as they are are checked, which is what the round grades.
3. Node on this host is v22.22.1, which cannot strip types (ERR_NO_TYPESCRIPT); main.ts was executed with Node 26.12.1 (`/srv/makefun-build/.hermes/tools/node-26.12.1-linux-x64`), which strips types as the grader's Node 22.23.4 does.
4. Transcripts bundled from this session: `node <kit>/cli/makefun.mjs bundle --repo entry --out transcripts.tar.gz --harness "Hermes Agent" --harness-version 0.23.3 --model mlai-code --provider local --effort max --mcp none` (exit 0; 1 session, system prompt in-session, 2 instruction files collected, 2 credentials auto-removed).

## Limitations

- RULES.txt, "Before you submit" step 2: there is no local grade of this competition — the scorer and judge run on the server; `check` is the only local gate and it passes 14/0.
- The five `at submission` rows (repo_public, repo_owner, repo_created_after_open, commit_in_repo, duplicate_snapshot) are the site's; the pipeline submits.
- `thinking_fresh` skips as a note (no beacon root in the seeded repo), which the rules state is not a rejection.
