/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * Full API - Users, Sessions, Tasks, Boards
 * API for managing users, sessions, tasks, and boards
 * OpenAPI spec version: 1.0.0
 */
import { createInstance } from "./api-instance";
import type { BodyType } from "./api-instance";
export type LangDtoLang = (typeof LangDtoLang)[keyof typeof LangDtoLang];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const LangDtoLang = {
  en: "en",
  ru: "ru",
} as const;

export interface LangDto {
  lang: LangDtoLang;
}

export type ThemeDtoTheme = (typeof ThemeDtoTheme)[keyof typeof ThemeDtoTheme];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ThemeDtoTheme = {
  light: "light",
  dark: "dark",
} as const;

export interface ThemeDto {
  theme: ThemeDtoTheme;
}

export interface UpdateTaskDto {
  assigneeId?: string;
  authorId?: string;
  description?: string;
  title?: string;
}

export interface CreateTaskDto {
  assigneeId?: string;
  authorId: string;
  description?: string;
  title: string;
}

export interface TaskDto {
  assigneeId?: string;
  authorId: string;
  description?: string;
  id: string;
  title: string;
}

export interface BoardCardDto {
  assigneeId?: string;
  id: string;
  name: string;
}

export interface BoardColDto {
  id: string;
  items: BoardCardDto[];
  name: string;
}

export interface BoardPatchDto {
  cols?: BoardColDto[];
  editorsIds?: string[];
  id?: string;
  name?: string;
  ownerId?: string;
}

export interface BoardPartialDto {
  editorsIds: string[];
  id: string;
  name: string;
  ownerId: string;
}

export interface BoardDto {
  cols: BoardColDto[];
  editorsIds: string[];
  id: string;
  name: string;
  ownerId: string;
}

export interface CreateBoardDto {
  editorsIds: string[];
  name: string;
  ownerId: string;
}

export interface SignInDto {
  email: string;
  password: string;
}

export type UserRole = (typeof UserRole)[keyof typeof UserRole];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UserRole = {
  admin: "admin",
  user: "user",
} as const;

export interface SessionDto {
  avatarId: string;
  email: string;
  id: string;
  name: string;
  role: UserRole;
  userId: string;
}

export interface CreateUserDto {
  avatarId: string;
  email: string;
  name: string;
  password: string;
  role: UserRole;
}

export interface UserDto {
  avatarId: string;
  email: string;
  id: string;
  name: string;
  role: UserRole;
}

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

/**
 * @summary Get all users
 */
export const getUsers = (options?: SecondParameter<typeof createInstance>) => {
  return createInstance<UserDto[]>({ url: `/users`, method: "get" }, options);
};

/**
 * @summary Add a new user
 */
export const createUser = (
  createUserDto: BodyType<CreateUserDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<UserDto>(
    {
      url: `/users`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: createUserDto,
    },
    options,
  );
};

/**
 * @summary Remove a user by ID
 */
export const deleteUser = (
  userId: string,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    { url: `/users/${userId}`, method: "delete" },
    options,
  );
};

/**
 * @summary Get current session
 */
export const getSession = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<SessionDto>(
    { url: `/session/me`, method: "get" },
    options,
  );
};

/**
 * @summary Sign in
 */
export const signIn = (
  signInDto: BodyType<SignInDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<SessionDto>(
    {
      url: `/session/sign-in`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: signInDto,
    },
    options,
  );
};

/**
 * @summary Sign out
 */
export const signOut = (options?: SecondParameter<typeof createInstance>) => {
  return createInstance<void>(
    { url: `/session/sign-out`, method: "post" },
    options,
  );
};

/**
 * @summary Get all tasks
 */
export const getTasks = (options?: SecondParameter<typeof createInstance>) => {
  return createInstance<TaskDto[]>({ url: `/tasks`, method: "get" }, options);
};

/**
 * @summary Add a new task
 */
export const createTask = (
  createTaskDto: BodyType<CreateTaskDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<TaskDto>(
    {
      url: `/tasks`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: createTaskDto,
    },
    options,
  );
};

/**
 * @summary Get a task by ID
 */
export const getTaskById = (
  taskId: string,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<TaskDto>(
    { url: `/tasks/${taskId}`, method: "get" },
    options,
  );
};

/**
 * @summary Add a new task
 */
export const updateTask = (
  taskId: string,
  updateTaskDto: BodyType<UpdateTaskDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/tasks/${taskId}`,
      method: "patch",
      headers: { "Content-Type": "application/json" },
      data: updateTaskDto,
    },
    options,
  );
};

/**
 * @summary Remove a task by ID
 */
export const deleteTask = (
  taskId: string,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    { url: `/tasks/${taskId}`, method: "delete" },
    options,
  );
};

/**
 * @summary Get all boards
 */
export const getBoards = (options?: SecondParameter<typeof createInstance>) => {
  return createInstance<BoardPartialDto[]>(
    { url: `/boards`, method: "get" },
    options,
  );
};

/**
 * @summary Add a new board
 */
export const createBoard = (
  createBoardDto: BodyType<CreateBoardDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<BoardDto>(
    {
      url: `/boards`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: createBoardDto,
    },
    options,
  );
};

/**
 * @summary Get a board by ID
 */
export const getBoardById = (
  boardId: string,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<BoardDto>(
    { url: `/boards/${boardId}`, method: "get" },
    options,
  );
};

/**
 * @summary Patch a board
 */
export const updateBoard = (
  boardId: string,
  boardDto: BodyType<BoardDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/boards/${boardId}`,
      method: "patch",
      headers: { "Content-Type": "application/json" },
      data: boardDto,
    },
    options,
  );
};

/**
 * @summary Remove a board by ID
 */
export const deleteBoard = (
  boardId: string,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    { url: `/boards/${boardId}`, method: "delete" },
    options,
  );
};

/**
 * @summary Get current lang
 */
export const getLang = (options?: SecondParameter<typeof createInstance>) => {
  return createInstance<LangDto>({ url: `/lang`, method: "get" }, options);
};

/**
 * @summary Set current lang
 */
export const setLang = (
  langDto: BodyType<LangDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/lang`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: langDto,
    },
    options,
  );
};

/**
 * @summary Get current theme
 */
export const getTheme = (options?: SecondParameter<typeof createInstance>) => {
  return createInstance<ThemeDto>({ url: `/theme`, method: "get" }, options);
};

/**
 * @summary Set current theme
 */
export const setTheme = (
  themeDto: BodyType<ThemeDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/theme`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: themeDto,
    },
    options,
  );
};

export type GetUsersResult = NonNullable<Awaited<ReturnType<typeof getUsers>>>;
export type CreateUserResult = NonNullable<
  Awaited<ReturnType<typeof createUser>>
>;
export type DeleteUserResult = NonNullable<
  Awaited<ReturnType<typeof deleteUser>>
>;
export type GetSessionResult = NonNullable<
  Awaited<ReturnType<typeof getSession>>
>;
export type SignInResult = NonNullable<Awaited<ReturnType<typeof signIn>>>;
export type SignOutResult = NonNullable<Awaited<ReturnType<typeof signOut>>>;
export type GetTasksResult = NonNullable<Awaited<ReturnType<typeof getTasks>>>;
export type CreateTaskResult = NonNullable<
  Awaited<ReturnType<typeof createTask>>
>;
export type GetTaskByIdResult = NonNullable<
  Awaited<ReturnType<typeof getTaskById>>
>;
export type UpdateTaskResult = NonNullable<
  Awaited<ReturnType<typeof updateTask>>
>;
export type DeleteTaskResult = NonNullable<
  Awaited<ReturnType<typeof deleteTask>>
>;
export type GetBoardsResult = NonNullable<
  Awaited<ReturnType<typeof getBoards>>
>;
export type CreateBoardResult = NonNullable<
  Awaited<ReturnType<typeof createBoard>>
>;
export type GetBoardByIdResult = NonNullable<
  Awaited<ReturnType<typeof getBoardById>>
>;
export type UpdateBoardResult = NonNullable<
  Awaited<ReturnType<typeof updateBoard>>
>;
export type DeleteBoardResult = NonNullable<
  Awaited<ReturnType<typeof deleteBoard>>
>;
export type GetLangResult = NonNullable<Awaited<ReturnType<typeof getLang>>>;
export type SetLangResult = NonNullable<Awaited<ReturnType<typeof setLang>>>;
export type GetThemeResult = NonNullable<Awaited<ReturnType<typeof getTheme>>>;
export type SetThemeResult = NonNullable<Awaited<ReturnType<typeof setTheme>>>;
