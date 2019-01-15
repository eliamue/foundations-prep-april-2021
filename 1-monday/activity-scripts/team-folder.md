Team Folder
===

Folders are about **navigation and organization**

# First Recipe

```sh
> pwd
> ls
> mkdir my-new-directory
> ls
> rmdir my-new-directory
> ls
```

# Second Recipe

```sh
> pwd
> ls
> mkdir parent-directory
> ls
```

```sh
> cd parent-directory
> pwd
> ls
> mkdir child-directory
> ls
> cd ..
> pwd
> ls
```

```sh
> cd ..
> pwd
> ls
> rmdir parent-directory # will fail
> cd parent-directory
> pwd
> ls
> rmdir child-directory
> ls
> cd ..
> pwd
> ls
> rmdir parent-directory
> ls
```