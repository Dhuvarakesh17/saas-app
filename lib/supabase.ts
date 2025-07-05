import {createClient} from "@supabase/supabase-js";
// @ts-expect-error - Import from @clerk/nextjs/server might have type issues
import {auth} from "@clerk/nextjs/server";

export const createSupabaseClient=()=>{
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,{
            async accessToken(){
                return ((await auth()).getToken());
            }

        }

    )
}
