# Don Jeere 

## Contributing

### File Structure

The following structure is used for developing both `components` as well as `sections`.

```markdown
.
├── ...
├── {ComponentName}             # Name of Component
│   ├── {Component}.tsx          # Component
│   ├── Style.scss               # Related SASS file for Component
└── ...
```

### Commiting
This project uses [Husky](https://typicode.github.io/husky/) `pre-commit hooks`.
The following hooks are ran before a commit is made:
 - **Linter (Eslint)**
 - **Formatter (Prettier)**
 - `npm run build`