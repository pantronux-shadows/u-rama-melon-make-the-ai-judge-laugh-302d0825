# BLOCKED — one check cannot pass on this host as-is

Exact failing check: the RULES.txt command without `--worktree`,

```
node <kit>/cli/makefun.mjs check --kit <kitdir> --repo entry --transcripts transcripts.tar.gz
```

exits 1 with `10 passed, 4 failed, 5 skipped, 5 checked at submission` and
`not ready: fix license_osi, entrypoint, thinking_reproduces, thinking_revised, then check again`.

It fails because `check` inspects the commit (`987cbb8 "entry start"`) that the
pipeline pre-seeded in `entry/.git`, and that commit is empty — it holds none of
the entry's files. The same bytes pass 14 passed / 0 failed with `--worktree`
(the files as they are) and would pass at any commit holding them.

What it would take: a writable `entry/.git` (owned by the agent's user) so the
entry files can be committed on top of the seed history. Committing currently
fails with `fatal: Unable to create '.../entry/.git/index.lock': Permission
denied`. Equally, the RULES-named `init` step refuses the seeded history
verbatim (see RESULT.md); init succeeds in a fresh directory (`makefun anchor
dabcaf35c544c5964cb43e938e3d0489640de056 round 34283035`).

Nothing about the entry's own content is blocked; the blocker is host
repository permissions only. Per the build brief, submission/signing is the
pipeline's job.
