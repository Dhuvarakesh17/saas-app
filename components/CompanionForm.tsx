"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import {createCompanion} from "@/lib/actions/companion.actions";

const formSchema = z.object({
    name: z.string().min(1,{message:"Companion is Required"}),
    subject: z.string().min(1,{message:"Subject is Required"}),
    topic: z.string().min(1,{message:"Topic is Required"}),
    voice: z.string().min(1,{message:"Voice is Required"}),
    style: z.string().min(1,{message:"Style is Required"}),
    duration: z.coerce.number().min(1,{message:"Duration is Required"}),

})

import React from 'react';
import {subjects} from "@/constants";
import {Textarea} from "@/components/ui/textarea";
import {redirect} from "next/navigation";

const CompanionForm = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name:"",
            subject:"",
            topic:"",
            voice:"",
            style:"",
            duration:15,

        },
    })

    // 2. Define a submit handler.
    const onSubmit=async (values: z.infer<typeof formSchema>)=> {

        const companion=await createCompanion(values);

        if(companion){
            redirect(`/companions   /${companion.id}`);
        }else{
            console.log("Failed to create a companion");
            redirect("/");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Companion Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter the companion name" {...field} className="input" />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>

                    )}
                />
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                                <Select
                                onValueChange={field.onChange}
                                value={field.value}
                                defaultValue={field.value}>
                                    <SelectTrigger className="input capitalize">
                                        <SelectValue placeholder="Select a Subject" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {subjects.map((subject)=>(
                                            <SelectItem value={subject}
                                                        key={subject}
                                                        className="capitalize">
                                                {subject}

                                            </SelectItem>

                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>

                    )}
                />
                <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>What Should the companion help with?</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Ex. Derivates & Integrates" {...field} className="input" />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>

                    )}
                />
                <FormField
                    control={form.control}
                    name="voice"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Voice</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}>
                                    <SelectTrigger className="input ">
                                        <SelectValue placeholder="Select a Voice" />
                                    </SelectTrigger>
                                    <SelectContent>

                                            <SelectItem value="male">
                                                Male
                                            </SelectItem>
                                        <SelectItem value="female">
                                            Female
                                        </SelectItem>

                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>

                    )}
                />
                <FormField
                    control={form.control}
                    name="style"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Style</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}>
                                    <SelectTrigger className="input ">
                                        <SelectValue placeholder="Select a Style "/>
                                    </SelectTrigger>
                                    <SelectContent>

                                        <SelectItem value="formal">
                                            Formal
                                        </SelectItem>
                                        <SelectItem value="casual">
                                            Casual
                                        </SelectItem>

                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>

                    )}
                />

                <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Duration</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="15" {...field} className="input" />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>

                    )}
                />
                <Button type="submit" className="w-full cursor-pointer">Build Your Companion</Button>
            </form>
        </Form>
    );
};

export default CompanionForm;
