<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Menu items and prices live only in `src/lib/menu-data.ts`; contact/social info only in `src/lib/site-info.ts` — single source so pages never drift.
- Each site section (home, menu, contact) is its own route file with its own head() — crawlable, shareable pages.
- Icon library is listed in vite optimizeDeps.include — prevents a mid-session dependency re-bundle that loads two React copies and blanks the preview.
