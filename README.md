# Don Jeere 

![Tractor Image](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3l6Mnh4OXRrZjIzcHJxODM1d291NnRweW5pY3I3YnI3dDJyZWltOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26gs9jTY1R02ueEnu/giphy.gif)
> For all your tractoring needs!

## Technologies
 - Next.js
 - React.js
 - Storybook (For UI Components)
 - jest (Util Unit Test)

## Contributing

### File Structure

The following structure is used for developing both `components` as well as `sections`.

```markdown
.
├── ...
├── {ComponentName}              # Name of Component
│   ├── {Component}.tsx          # Component
│   ├── Style.scss               # Related SASS file for Component
└── ...
```

### Commiting
This project uses [Husky](https://typicode.github.io/husky/) `pre-commit hooks`.
The following hooks are ran before a commit is made:
 - **Tests**
 - **Linter (Eslint)**
 - **Formatter (Prettier)**
 - **Build**
