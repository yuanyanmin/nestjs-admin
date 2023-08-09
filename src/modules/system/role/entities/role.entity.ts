import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Dept } from '../../dept/entities/dept.entity';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Role extends BaseEntity {
  // 角色ID
  @PrimaryGeneratedColumn({
    name: 'role_id',
    comment: '角色ID',
    type: 'int',
  })
  roleId: number;

  // 角色名称
  @Column({
    name: 'role_name',
    comment: '角色名称',
    length: 30,
  })
  roleName: string;

  // 角色权限字符串
  @Column({
    name: 'role_key',
    comment: '角色权限字符串',
    length: '100',
  })
  roleKey: string;

  // 显示顺序
  @Column({
    name: 'role_sort',
    comment: '显示顺序',
  })
  roleSort: number;

  // 数据范围（1：全部数据权限 2：自定义数据权限 3：本部门数据权限 4：本部门一下数据权限 5：仅本人数据权限）
  @Column({
    name: 'data_scope',
    comment:
      '数据范围（1：全部数据权限 2：自定义数据权限 3：本部门数据权限 4：本部门一下数据权限 5：仅本人数据权限）',
    length: 1,
    type: 'char',
    default: '1',
  })
  dataScope?: string;

  // 菜单树选择项是否关联显示
  @Column({
    name: 'menu_check_strictly',
    comment: '菜单树选择项是否关联显示',
    type: 'boolean',
    default: true,
  })
  menuCheckStrictly: boolean;

  // 菜单树是否关联显示
  @Column({
    name: 'dept_check_strictly',
    comment: '菜单树选择项是否关联显示',
    type: 'boolean',
    default: true,
  })
  deptCheckStrictly: boolean;

  // 角色状态（0正常 1停用）
  @Column({
    name: 'status',
    comment: '角色状态（0正常 1停用）',
    length: 1,
    type: 'char',
  })
  status: string;

  @Column({
    name: 'del_flag',
    comment: '删除标志（0代表存在 2代表删除）',
    length: 1,
    type: 'char',
    default: '0',
  })
  delFlag: string;

  @ManyToMany(() => Dept, (dept) => dept.roles)
  depts: Dept[];

  // @ManyToMany(() => Menu, (menu) => menu.roles)
  // menus: Menu[];

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];
}
