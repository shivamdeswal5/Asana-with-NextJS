import { NextRequest, NextResponse } from 'next/server';

 type User = {
        id: string
        name: string
        email: string
        password: string
        confirmPassword: string
        organization: string
        role: string
        isTeamLead: boolean
        projects: []
        tasks: []
}

const users: User[] = []; 

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email,password,confirmPassword,organization,role,isTeamLead,projects,tasks,id } = body;

  if (!name || !email || !password || !confirmPassword || !organization || !role) {
    return NextResponse.json({ error: 'Please Fill All The Feilds ..' }, { status: 400 });
  }
  users.push({ name, email,password,confirmPassword,organization,role,isTeamLead,projects,tasks,id});
  return NextResponse.json({ message: 'User added', users });
}